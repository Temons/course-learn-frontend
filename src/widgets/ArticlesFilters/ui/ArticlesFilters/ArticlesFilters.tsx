import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticlesFilters.module.scss';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  type: ArticleType;
  onChangeType: (type: ArticleType) => void;
  search: string;
  onChangeSearch: (value: string) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const { t } = useTranslation('articles');
  const {
    className,
    sort,
    order,
    onChangeSort,
    onChangeType,
    onChangeSearch,
    onChangeOrder,
    search,
    type,
  } = props;

  return (
    <Card
      className={classNames(cls.articlesFilters, {}, [className])}
      padding={'24'}
    >
      <VStack gap={'32'}>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('search')}
        />
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});
