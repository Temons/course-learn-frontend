import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './CommentList.module.scss';
import { CommentCard } from "../CommentCard/CommentCard";
import { Text } from "shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        <CommentCard isLoading/>
        <CommentCard isLoading/>
        <CommentCard isLoading/>
      </div>
    )
  }


  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length
        ?
        comments.map((comment: Comment) => (
          <CommentCard
            isLoading={isLoading}
            className={cls.comment}
            comment={comment}
            key={comment.id}
          />
        ))
        : <Text text={t('commentsEmpty')}  />
      }
    </div>
  );
});
