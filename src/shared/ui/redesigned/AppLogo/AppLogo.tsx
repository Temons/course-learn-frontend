import { memo } from 'react';


import cls from './AppLogo.module.scss';

import AppSvg from '@/shared/assets/icons/app-logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
  return (
    <HStack
      max
      justify={'center'}
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig}></div>
      <div className={cls.gradientSmall}></div>
      <AppSvg
        width={size}
        height={size}
        color={'black'}
        className={cls.appLogo}
      />
    </HStack>
  );
});
