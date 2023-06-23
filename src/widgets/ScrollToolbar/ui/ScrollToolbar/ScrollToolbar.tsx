import { memo } from 'react';

import cls from './ScrollToolbar.module.scss';

import { ScrollToTopButton } from '@/features/scrollToTopButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo(({ className }: ScrollToolbarProps) => {
  return (
    <VStack
      justify={'center'}
      align={'center'}
      max
      className={classNames(cls.scrollToolbar, {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  );
});
