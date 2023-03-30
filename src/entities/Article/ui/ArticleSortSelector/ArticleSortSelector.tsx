import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo } from "react";
import cls from './ArticleSortSelector.module.scss';
import { Select, SelectOption } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { t } = useTranslation('articles');
  const {
    className,
    order,
    sort,
    onChangeOrder,
    onChangeSort
  } = props;

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('increase')
    },
    {
      value: 'desc',
      content: t('decrease')
    }
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('dateOfCreated')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views')
    }
  ], [t])

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t('sortBy')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />

    </div>
  );
});