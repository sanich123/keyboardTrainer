import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import ThemeSwitch from './ThemeSwitch';

const dispatch = jest.fn();
describe('ThemeSwitch compoenent', () => {
  it('should render correctly', () => {
    renderWithProviders(<ThemeSwitch dispatch={dispatch} theme="light" lang="ru"/>);
    expect(screen.getByText(/тёмная/i)).toBeInTheDocument();
    expect(screen.getByText(/светлая/i)).toBeInTheDocument();
  });
});
