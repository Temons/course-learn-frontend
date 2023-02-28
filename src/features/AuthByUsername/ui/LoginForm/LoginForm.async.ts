import { FC, lazy } from 'react';
import { LoginFormProps } from "features/AuthByUsername/ui/LoginForm/LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  console.log('res')
  //@ts-ignore
  // You can't do like this!!! But It's just for example
  setTimeout(() => resolve(import('./LoginForm')), 1000)
}));