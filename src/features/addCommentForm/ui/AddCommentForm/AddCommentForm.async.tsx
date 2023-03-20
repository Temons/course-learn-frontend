import { FC, lazy } from 'react';
import { AddCommentFormProps } from "../AddCommentForm/AddCommentForm";

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
  //@ts-ignore
  // You can't do like this!!! But It's just for example
  setTimeout(() => resolve(import('./AddCommentForm')), 1000)
}));