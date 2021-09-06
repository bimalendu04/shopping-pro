import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Shopping title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shopping/i);
  expect(linkElement).toBeInTheDocument();
});
