import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation('404');
  return (
    <div
      className={classNames(cls.notFoundPage, {}, [className])}
      data-testid={'NotFoundPage'}
    >
      {t('pageNotFound')}
    </div>
  );
};
