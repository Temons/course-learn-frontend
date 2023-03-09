import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from "react";

interface AvatarProps {
    className? : string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 125,
      height: size || 125
    }
  }, [size])

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, mods, [className])} />
  );
};
