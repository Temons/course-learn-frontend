import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  //@ts-ignore
  // You can't do like this!!! But It's just for example
  setTimeout(() => resolve(import('./AboutPage')), 1000)
}));