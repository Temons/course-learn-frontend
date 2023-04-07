import { ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = "top" | "bottom";

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox(props: ListBoxProps) {
  const {
    items = [],
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = "bottom",
    label
  } = props;

  const optionClasses = [cls[direction]];

  return (
    <HStack gap={'4'}>
      {label && <span>{label + '>'}</span>}

      <HListBox
        as={'div'}
        className={classNames(cls.listBox, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button
          className={cls.trigger}
          disabled={readonly}
        >
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active }) => (
                <li
                  className={
                    classNames(cls.item, {
                      [cls.active]: active ,
                      [cls.disabled]: item.disabled
                    })
                  }
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}
