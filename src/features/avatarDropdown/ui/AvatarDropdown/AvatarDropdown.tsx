import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import cls from './AvatarDropdown.module.scss';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "@/entities/User";
import { RoutePath } from "@/shared/const/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";





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
