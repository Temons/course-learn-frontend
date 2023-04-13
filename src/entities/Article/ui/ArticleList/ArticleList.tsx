import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributeAnchorTarget, memo } from "react";
import cls from './ArticleList.module.scss';
import { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { PAGE_ID } from "widgets/Page/Page";
import { ArticleView } from "../../model/consts/articlesConsts";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => {
      return <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    })
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation('articles')
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
    virtualized = true
  } = props;

  const isBig = view === ArticleView.BIG;

  const itemsPerRow = isBig ? 1 : 4;
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({ index, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          className={cls.card}
          target={target}
          key={`str${i}`}
        />
      )
    }

    return (
      <div
        key={key}
        style={style}
        className={cls.row}
      >
        {items}
      </div>
    )

  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text
          size={TextSize.L}
          title={t('articlesNotFound')}
        />
      </div>
    )
  }

  return (
    // @ts-ignore
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop
      }) => (
        <div
          // @ts-ignore
          ref={registerChild}
          className={classNames(cls.articleList, {}, [className, cls[view]])}
        >
          {virtualized
            ? (
              // @ts-ignore
              <List
                width={width ? width - 80 : 700}
                height={height ?? 700}
                rowCount={rowCount}
                rowHeight={isBig ? 700 : 330}
                rowRenderer={rowRender}
                autoHeight
                onScroll={onChildScroll}
                isScrolling={isScrolling}
                scrollTop={scrollTop}
              />
            ) : (
              articles.map(item => (
                <ArticleListItem
                  article={item}
                  view={view}
                  target={target}
                  className={cls.card}
                  key={item.id}
                />
              ))
            )
          }
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
