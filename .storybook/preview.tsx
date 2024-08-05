import React, { useContext } from 'react';
import type { Preview } from '@storybook/react';
import 'tailwindcss/tailwind.css';
import '../src/index.css';
import {
  ThemeContext,
  ThemeContextProvider,
} from '../src/contexts/themeContext';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // NOTE: wrap all the story components in the ThemeContextProvider
  decorators: [
    (Story) => {
      const { themeMode } = useContext(ThemeContext);
      return (
        <ThemeContextProvider>
          <div className={`theme-${themeMode}`}>
            <Story />
          </div>
        </ThemeContextProvider>
      );
    },
  ],
};

export default preview;
