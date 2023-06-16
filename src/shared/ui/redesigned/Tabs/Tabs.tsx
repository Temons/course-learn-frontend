import { memo, ReactNode, useCallback } from 'react';

import cls from './Tabs.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Flex, FlexDirection } from '@/shared/ui/redesigned/Stack/Flex/Flex';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}
export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, value, direction = 'row' } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <Flex
      gap={'8'}
      align={'start'}
      direction={direction}
      className={classNames(cls.tabs, {}, [className])}
    >
      {tabs.map(tab => {
        const isSelected = tab.value === value;
        return (
          <Card
            variant={isSelected ? 'light' : 'normal'}
            className={classNames(cls.tab, { [cls.selected]: isSelected })}
            key={tab.value}
            onClick={clickHandle(tab)}
            border={'round'}
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
