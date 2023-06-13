import { memo } from 'react';

import cls from './AppLogo.module.scss';

import AppSvg from '@/shared/assets/icons/app-logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/deprecated/Stack';

interface AppLogoProps {
  className?: string;
}

/**
 * Old, use a new Component from redesigned folder
 * @deprecated
 */
export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <HStack
      max
      justify={'center'}
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig}></div>
      <div className={cls.gradientSmall}></div>
      <AppSvg className={cls.appLogo} />
    </HStack>
  );
});
