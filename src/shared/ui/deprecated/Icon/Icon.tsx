import React, { memo } from 'react';

import cls from './Icon.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

/**
 * Old, use a new Component from redesigned folder
 * @deprecated
 */
export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted, ...otherProps } = props;

  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.icon, {}, [
        className,
      ])}
      {...otherProps}
    />
  );
});
