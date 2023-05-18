import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";


import {
  getAddCommentFormText
} from "../../model/selectors/addCommentFormSelector";
import { addCommentFormActions, addCommentFormReducer } from "../../model/slices/AddCommentFormSlice";

import cls from './AddCommentForm.module.scss';

import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { HStack } from "@/shared/ui/Stack";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        max
        justify={'between'}
        className={classNames(cls.addCommentForm, {}, [className])}
        data-testid={'AddCommentForm'}
      >
        <Input
          className={cls.input}
          placeholder={t('inputComment')}
          value={text}
          onChange={onCommentTextChange}
          data-testid={'AddCommentForm.Input'}
        />

        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
          data-testid={'AddCommentForm.Button'}
        >
          {t('send')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
