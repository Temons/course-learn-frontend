import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
  //@ts-ignore
  // You can't do like this!!! But it's just for example
  setTimeout(() => resolve(import('./ArticleEditPage')), 400)
}));