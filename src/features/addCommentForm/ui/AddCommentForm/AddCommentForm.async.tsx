import { FC, lazy } from 'react';
import { AddCommentFormProps } from "../AddCommentForm/AddCommentForm";

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));