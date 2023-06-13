import { useTranslation } from 'react-i18next';


import cls from './PageError.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();
  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      {t('pageError')}
      <Button onClick={reloadPage}>{t('reloadPage')}</Button>
    </div>
  );
};
