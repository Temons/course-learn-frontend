import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import cls from './AvatarDropdown.module.scss';
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Dropdown } from "@/shared/ui/Popups";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "@/entities/User";
import { useTranslation } from "react-i18next";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <div className={classNames(cls.avatarDropdown, {}, [className])}>
      <Dropdown
        direction='bottom left'
        items={[
          ...(isAdminPanelAvailable ? [
            {
              content: t('adminPanel'),
              href: RoutePath.admin_panel
            }
          ] : []),
          {
            content: t('profile'),
            href: RoutePath.profile + authData.id
          },
          {
            content: t('logOut'),
            onClick: onLogout
          }
        ]}
        trigger={<Avatar size={30} src={authData.avatar} />}
      />
    </div>
  );
});
