import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cls from './Navbar.module.scss';

import { getUserAuthData } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUsername";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { NotificationButton } from "@/features/notificationButton";
import { RoutePath } from "@/shared/const/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { Text, TextTheme } from "@/shared/ui/Text";

interface NavbarProps {
    className? : string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, []);

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
        <HStack gap='16' className={cls.actions}>

          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
