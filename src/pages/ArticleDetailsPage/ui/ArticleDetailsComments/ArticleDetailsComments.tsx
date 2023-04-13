import { classNames } from "shared/lib/classNames/classNames";
import { memo, Suspense, useCallback } from "react";
import { Text } from "shared/ui/Text/Text";
import { AddCommentForm } from "features/addCommentForm";
import { CommentList } from "entities/Comment";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticleComments } from "../../model/slices/ArticleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useTranslation } from "react-i18next";
import {
  fetchCommentsByArticleId
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { VStack } from "shared/ui/Stack";
import { Loader } from "shared/ui/Loader/Loader";

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('translation' )
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);


  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  })

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text ))
  }, [dispatch]);

  return (
    <VStack
      gap='16'
      max
      className={classNames('', {}, [className])}
    >
      <Text title={t('comments')} />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  );
});
