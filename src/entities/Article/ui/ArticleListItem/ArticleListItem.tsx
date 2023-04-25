import { classNames } from "@/shared/lib/classNames/classNames";
import { HTMLAttributeAnchorTarget, memo } from "react";
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock } from "../../model/types/article";
import { Text } from "@/shared/ui/Text/Text";
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from "@/shared/ui/Icon/Icon";
import { Card } from "@/shared/ui/Card/Card";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ArticleBlockType, ArticleView } from "../../model/consts/articlesConsts";
import { RoutePath } from "@/shared/const/router";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation('articles');

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      block => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              to={RoutePath.article_details + article.id}
              target={target}
            >
              <Button theme={ButtonTheme.OUTLINE}>
                {t('readMore') + '...'}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} className={cls.img} alt={article.title} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
