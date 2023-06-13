import { memo } from 'react';

import cls from './Overlay.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Old, use a new Component from redesigned folder
 * @deprecated
 */
export const Overlay = memo(({ className, onClick }: OverlayProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(cls.overlay, {}, [className])}
    />
  );
});
