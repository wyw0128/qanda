import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Get the element using `getByText`
  const submitBtn = screen.getByText(/Submit/i);

  // Check if the element is in the document
  expect(submitBtn).not.toBeNull();
  expect(document.body.contains(submitBtn)).toBe(true);
});
