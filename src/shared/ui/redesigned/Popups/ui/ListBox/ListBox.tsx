import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import { Button } from '../../../Button';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './ListBox.module.scss';

import ArrowDown from '@/shared/assets/icons/arrow-bottom.svg';
import SelectedIcon from '@/shared/assets/icons/done.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

export interface ListBoxItem<T extends string> {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    items = [],
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(() => {
    return items?.find(item => item.value === value);
  }, [items, value]);

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
          as={Button}
          className={popupCls.trigger}
          variant={'filled'}
          disabled={readonly}
          addonRight={<Icon Svg={ArrowDown} />}
        >
          {selectedItem?.content ?? defaultValue}
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map(item => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                    [popupCls.selected]: selected,
                  })}
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
  );
}
