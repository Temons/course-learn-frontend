import { memo } from "react";

import { useNotifications } from "../../api/notificationApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";

import cls from './NotificationList.module.scss';

import { classNames } from "@/shared/lib/classNames/classNames";
import { Skeleton } from "@/shared/ui/Skeleton";
import { VStack } from "@/shared/ui/Stack";

interface NotificationListProps {
  className?: string;
} 

export const NotificationList = memo(({ className }: NotificationListProps) => {
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000
  });

  if (isLoading) {
    return (
      <VStack
        gap='16'
        className={classNames(cls.notificationList, {}, [className])}
      >
        <Skeleton width='100%' border='8px' height='80px' />
        <Skeleton width='100%' border='8px' height='80px' />
        <Skeleton width='100%' border='8px' height='80px' />
      </VStack>
    )
  }

  return (
    <VStack
      gap='16'
      className={classNames(cls.notificationList, {}, [className])}
    >
      {data?.map(item => (
        <NotificationItem
          key={item.id}
          item={item}
        />
      ))}
    </VStack>
  );
});
