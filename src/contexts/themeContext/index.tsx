import { createContext, useState, ReactNode } from 'react';
import { ThemeMode } from '../../constants/themes';

interface ThemeContextProps {
  themeMode: ThemeMode;
  setThemeMode: (themeMode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeMode: getInitialThemeMode(undefined),
  setThemeMode: () => {},
});

interface ThemeContextProviderProps {
  defaultThemeMode?: ThemeMode;
  children: ReactNode;
}

// 1. if defaultThemeMode is not provided, it will get the default value from local storage, 2. if it is not available, it will use the light mode as the default value; 3. if defaultThemeMode is provided, it will use the provided value as the default value
function getInitialThemeMode(defaultThemeMode: ThemeMode | undefined) {
  if (defaultThemeMode) {
    return defaultThemeMode;
  } else {
    const storedThemeMode = localStorage.getItem('themeMode');
    if (storedThemeMode) {
      return storedThemeMode as ThemeMode;
    } else {
      return ThemeMode.DARK_MODE;
    }
  }
}

export const ThemeContextProvider = ({
  defaultThemeMode,
  children,
}: ThemeContextProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    getInitialThemeMode(defaultThemeMode)
  );

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
