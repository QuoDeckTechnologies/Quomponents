import { render, screen } from '@testing-library/react';
import initStoryshots from '@storybook/addon-storyshots';
import App from './App';

initStoryshots();

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
