import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import cls from './Page.module.scss';

import { StateSchema } from "@/app/providers/StoreProvider";
import { getUIScrollByPath, uiActions } from "@/features/UI";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector(
    (state: StateSchema) => getUIScrollByPath(state, pathname)
  )

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop
    }))
  }, 500)

  return (
    <main
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
    </main>
  );
});
