import { CSSProperties, useMemo } from 'react';

import UserIcon from '../../../assets/icons/user-filled.svg';

import cls from './Avatar.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, size = 125, alt } = props;
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const fallback = <Skeleton width={size} height={size} border={'50%'} />;
  const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

  return (
    <AppImage
      src={src}
      alt={alt}
      style={styles}
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(cls.avatar, mods, [className])}
    />
  );
};
