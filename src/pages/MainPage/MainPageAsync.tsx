import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    // You can't do like this!!! But its just for example
    setTimeout(() => resolve(import('./MainPage')), 1000)
}));