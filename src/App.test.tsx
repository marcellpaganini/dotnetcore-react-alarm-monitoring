import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  render(<App />);
  const h1Tag = screen.getByText(/Telecom Remote Monitoring/i);
  expect(h1Tag).toBeInTheDocument();
});
