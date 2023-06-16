import { memo } from 'react';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo(({ className }: FiltersContainerProps) => {
  const {
    sort,
    order,
    search,
    type,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  } = useArticleFilters();

  return (
    <ArticlesFilters
      className={className}
      sort={sort}
      order={order}
      onChangeOrder={onChangeOrder}
      onChangeSort={onChangeSort}
      type={type}
      onChangeType={onChangeType}
      search={search}
      onChangeSearch={onChangeSearch}
    />
  );
});
