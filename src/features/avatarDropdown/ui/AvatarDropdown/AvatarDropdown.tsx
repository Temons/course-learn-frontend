import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import cls from './AvatarDropdown.module.scss';

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import {
  getRouteAdminPanel,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

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
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('adminPanel'),
            href: getRouteAdminPanel(),
          },
        ]
      : []),
    {
      content: t('settings'),
      href: getRouteSettings(),
    },
    {
      content: t('profile'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('logOut'),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <div className={classNames(cls.avatarDropdown, {}, [className])}>
          <Dropdown
            direction="bottom left"
            items={items}
            trigger={<Avatar size={40} src={authData.avatar} />}
          />
        </div>
      }
      off={
        <div className={classNames(cls.avatarDropdown, {}, [className])}>
          <DropdownDeprecated
            direction="bottom left"
            items={items}
            trigger={
              <AvatarDeprecated
                size={30}
                fallbackInverted
                src={authData.avatar}
              />
            }
          />
        </div>
      }
    />
  );
});
