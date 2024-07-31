import { createContext, useState, ReactNode } from 'react';
import { ThemeMode } from '../../constants/themes';

interface ThemeContextProps {
  themeMode: ThemeMode;
  setThemeMode: (themeMode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeMode: ThemeMode.LIGHT_MODE,
  setThemeMode: () => {},
});

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT_MODE);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
