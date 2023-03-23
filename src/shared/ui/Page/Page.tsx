import { classNames } from "shared/lib/classNames/classNames";
import { memo, MutableRefObject, ReactNode, useRef } from "react";
import cls from './Page.module.scss';
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd
  })

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
