import { memo, ReactNode } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './Drawer.module.scss';
import { Portal } from "shared/ui/Portal/Portal";
import { Overlay } from "shared/ui/Overlay/Overlay";
import { useModal } from "shared/lib/hooks/useModal/useModal";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    onClose,
    children,
    isOpen,
    lazy
  } = props;
  const { theme } = useTheme();

  const {
    isClosing,
    close,
    isMounted
  } = useModal({
    animationDelay: 500,
    onClose,
    isOpen
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
})
