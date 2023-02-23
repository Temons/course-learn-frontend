import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
    className? : string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('logIn')}
      </Button>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}

      />
    </div>
  );
};
