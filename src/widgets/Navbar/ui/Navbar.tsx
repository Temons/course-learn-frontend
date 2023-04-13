import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { memo, useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "entities/User";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";

interface NavbarProps {
    className? : string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('frontendApp')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('createArticle')}
        </AppLink>
        <Dropdown
          direction='bottom left'
          className={cls.dropdown}
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
      </header>
    )
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('logIn')}
      </Button>
      {isAuthModal && (<LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
      )}
    </header>
  );
});
