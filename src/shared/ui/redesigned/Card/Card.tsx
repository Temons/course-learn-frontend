import { HTMLAttributes, memo, ReactNode } from 'react';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    padding = '8',
    max,
    ...otherProps
  } = props;

  const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
  };

  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        className,
        cls[variant],
        cls[paddingClass],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});