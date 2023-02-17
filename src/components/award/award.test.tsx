import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import Award from './award';
describe('Award', () => {
  it('Award should render correctly on english language', () => {
    renderWithProviders(<Award nameAward="acc-on" text="Speed over 100 char/min" />);
    expect(screen.getByText(/speed over 100 char\/min/i)).toBeInTheDocument();
    expect(screen.getByAltText(/award/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('Award should render correctly on russian language', () => {
    renderWithProviders(<Award nameAward="acc-on" text="Скорость больше 100 зн/мин" />);
    expect(screen.getByText(/Скорость больше 100 зн\/мин/i)).toBeInTheDocument();
    expect(screen.getByAltText(/award/i)).toBeInTheDocument();
    expect(screen.getByAltText(/award/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
