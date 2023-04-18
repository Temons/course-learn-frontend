import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { Popover as HPopover } from '@headlessui/react'
import cls from './Popover.module.scss';
import { DropdownDirection } from "../../../../types/ui";
import { mapDirectionClass } from "../../styles/consts";
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}


export function Popover(props: PopoverProps) {
  const {
    className,
    trigger,
    direction = 'bottom left',
    children
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover
      className={classNames(cls.popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button className={popupCls.trigger} as={'span'}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(cls.panel, {}, menuClasses)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  )
}
