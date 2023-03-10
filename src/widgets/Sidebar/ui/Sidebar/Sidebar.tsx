import { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "widgets/Sidebar/ui/SidebarItem/SidebarItem";

interface SidebarProps {
    className? : string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prevState => !prevState)
  }


  const itemsList = useMemo(() => {
    return SidebarItemsList.map((item) => (
      <SidebarItem
        item={item}
        collapsed={collapsed}
        key={item.path}
      />
    ))

  }, [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.items}>
        {itemsList}
      </div>

      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
});
