import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticles } from '../../model/slices/articlesPageSlice';

import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from '@/shared/ui/deprecated/Text';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(
  ({ className }: ArticleInfiniteListProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('articles');
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
      dispatch(initArticlesPage(searchParams));
    });

    if (error) {
      return <Text text={t('errorHappened')} />;
    }

    return (
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={className}
      />
    );
  },
);
