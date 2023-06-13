import { CSSProperties, memo } from 'react';

import cls from './Skeleton.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

/**
 * Old, use a new Component from redesigned folder
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps) => {
  const { className, width, height, border } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={classNames(cls.skeleton, {}, [className])} style={styles} />
  );
});
