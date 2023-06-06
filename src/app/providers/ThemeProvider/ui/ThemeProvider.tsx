import { ReactNode, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;
  const { theme: defaultTheme } = useJsonSettings();
  const [isThemeInited, setIsThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.LIGHT,
  );
  document.body.className = theme;

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
