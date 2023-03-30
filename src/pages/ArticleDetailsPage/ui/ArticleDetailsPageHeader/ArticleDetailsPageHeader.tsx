import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import cls from './ArticleDetailsPageHeader.module.scss';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "entities/Article";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selectors/article";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('articles');
  const navigate = useNavigate();
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);
  
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`)
  }, [article?.id, navigate])
  
  return (
    <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t('backToList')}
      </Button>
      {canEdit && <Button
        className={cls.editBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onEditArticle}
      >
        {t('edit')}
      </Button>}
    </div>
  );
});
