import { memo } from 'react';

import cls from './ScrollToTopButton.module.scss';

import CircleIcon from '@/shared/assets/icons/circle-up.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo(
  ({ className }: ScrollToTopButtonProps) => {
    const onClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <Icon
        Svg={CircleIcon}
        width={32}
        height={32}
        onClick={onClick}
        clickable
        className={classNames(cls.scrollToTopButton, {}, [className])}
      />
    );
  },
);
