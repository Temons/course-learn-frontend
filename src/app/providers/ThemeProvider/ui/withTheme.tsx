import { ComponentType } from 'react';

import ThemeProvider from './ThemeProvider';

import { useJsonSettings } from '@/entities/User';

export const withTheme = (Component: ComponentType) => {
  return () => {
    const { theme: defaultTheme } = useJsonSettings();

    return (
      <ThemeProvider initialTheme={defaultTheme}>
        <Component />
      </ThemeProvider>
    );
  };
};
