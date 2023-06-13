import { ChangeEvent, useMemo } from 'react';

import cls from './Select.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

/**
 * Old, use a new Component from redesigned folder
 * @deprecated
 */
export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, readonly, onChange } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(() => {
    return options?.map(opt => (
      <option className={cls.option} value={opt.value} key={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const mods: Mods = {};

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label + '>'}</span>}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};
