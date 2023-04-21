import { memo, useCallback } from "react";
import { RatingCard } from "@/entities/Rating";
import { useTranslation } from "react-i18next";
import { useGetArticleRating, useRateArticle } from "../../api/articleRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation('rating');
  const userData = useSelector(getUserAuthData);

  const {
    data,
    isLoading
  } = useGetArticleRating({ articleId, userId: userData?.id || '' });

  const [rateArticleMutation] = useRateArticle();

  const rating = data?.[0];

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: starsCount,
        feedback
      })
    } catch (e) {
      console.log('Error handleRateArticle', e)
    }
  }, [articleId, rateArticleMutation, userData?.id])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback)
  }, [handleRateArticle])

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount)
  }, [handleRateArticle])

  if (isLoading) {
    return <Skeleton width='100%' height='120' />
  }

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      className={className}
      title={t('setYourStars')}
      feedbackTitle={t('setReview')}
      hasFeedback
    />
  );
});

export default ArticleRating;
