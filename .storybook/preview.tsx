import React, { useContext } from 'react';
import type { Preview } from '@storybook/react';
import 'tailwindcss/tailwind.css';
import '../src/index.css';
import {
  ThemeContext,
  ThemeContextProvider,
} from '../src/contexts/themeContext';

// NOTE: wrap all the story components in the ThemeContextProvider
const withThemeProvider = (Story: any) => {
  return (
    <ThemeContextProvider>
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    </ThemeContextProvider>
  );
};

// NOTE: create theme wrapper because the provider must wrap the component using the context; otherwise only the default value will be used
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = useContext(ThemeContext);
  return <div className={`theme-${themeMode}`}>{children}</div>;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
