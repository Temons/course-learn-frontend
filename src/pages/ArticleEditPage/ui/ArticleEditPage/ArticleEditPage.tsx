import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import cls from './ArticleEditPage.module.scss';
import { Page } from "@/widgets/Page/Page";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);
  return (
    <Page className={classNames(cls.articleEditPage, {}, [className])}>
      {isEdit ? t('editArticle') + id : t('createNewArticle')}
    </Page>
  );
});

export default ArticleEditPage;