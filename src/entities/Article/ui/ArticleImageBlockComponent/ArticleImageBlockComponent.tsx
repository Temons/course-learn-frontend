import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from "../../model/types/article";
import { Text, TextAlign } from "@/shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={cls.img} alt={block.title} />
      { block.title && (
        <Text text={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
