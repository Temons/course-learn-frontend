import { memo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails, ArticleList } from "entities/Article";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slices/ArticleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AddCommentForm } from "features/addCommentForm";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Page } from "widgets/Page/Page";
import { getArticleRecommendations } from "../../model/slices/ArticleDetailsPageRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import {
  fetchArticleRecommendations
} from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "shared/ui/Stack";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation(['articles', 'translation'] )
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text ))
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  })

  if (!id) {
    return (
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('articles:articleNotFound')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <VStack gap={'16'} max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Text
            size={TextSize.L}
            className={cls.commentsTitle}
            title={t('articles:recommend')}
          />
          <ArticleList
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            className={cls.recommendations}
            target='_blank'
          />
          <Text className={cls.commentsTitle} title={t('translation:comments')} />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
