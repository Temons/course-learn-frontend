import { memo } from "react";

import { ArticleTextBlock } from "../../model/types/article";

import cls from './ArticleTextBlockComponent.module.scss';

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cls.title} />
      )}
      {block.paragraphs.map(paragraph => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
});
