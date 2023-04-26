import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from "../../model/types/article";
import { Code } from "@/shared/ui/Code";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;
  return (
    <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
