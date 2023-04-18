import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import cls from './NotificationButton.module.scss';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { NotificationList } from "entities/Notification";
import { Popover } from "shared/ui/Popups";
import NotificationIcon from "shared/assets/icons/notification.svg";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  return (
    <Popover
      className={classNames('', {}, [className])}
      direction='bottom left'
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      )}>
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
