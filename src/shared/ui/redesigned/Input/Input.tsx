import React, {
  InputHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import cls from './Input.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

type InputSize = 's' | 'm' | 'l';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  autofocus?: boolean;
  onChange?: (value: string) => void;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: InputSize;
}

export const Input = memo((props: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const {
    className,
    value,
    label,
    onChange,
    type = 'text',
    autofocus,
    placeholder,
    readonly,
    addonLeft,
    addonRight,
    size = 'm',
    ...otherProps
  } = props;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const input = (
    <div className={classNames(cls.inputWrapper, mods, [className, cls[size]])}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        className={cls.input}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </div>
  );

  if (label) {
    return (
      <HStack max gap={'8'}>
        <Text text={label} />
        {input}
      </HStack>
    );
  }

  return input;
});
