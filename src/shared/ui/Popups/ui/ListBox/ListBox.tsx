import { Fragment, ReactNode, useMemo } from 'react'
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { HStack } from "@/shared/ui/Stack";
import { DropdownDirection } from "@/shared/types/ui";
import SelectedIcon from '@/shared/assets/icons/done.svg'
import { mapDirectionClass } from "../../styles/consts";
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

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
    direction = "bottom right",
    label
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  const itemsWithLabel = useMemo(
    () => ( label ?
      [ { value: "_label", content: label, disabled: true }, ...items ]
      : items
    ), [ items, label ])

  return (
    <HStack gap={'4'}>
      {label && <span>{label + '>'}</span>}

      <HListBox
        as={'div'}
        className={classNames(cls.listBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button
          as={'span'}
          className={popupCls.trigger}
          // disabled={readonly}
        >
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {itemsWithLabel?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={
                    classNames(cls.item, {
                      [popupCls.active]: active ,
                      [popupCls.disabled]: item.disabled
                    })
                  }
                >
                  <HStack gap={'8'}>
                    {item.content}
                    {selected && <SelectedIcon className={cls.selectedIcon} />}
                  </HStack>
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}
