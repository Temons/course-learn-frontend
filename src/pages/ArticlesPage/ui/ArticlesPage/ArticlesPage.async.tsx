import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  //@ts-ignore
  // You can't do like this!!! But it's just for example
  setTimeout(() => resolve(import('./ArticlesPage')), 1000)
}));