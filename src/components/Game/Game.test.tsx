import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import { Game } from './Game';

describe('Game', () => {
  it('should render correctly', () => {
    renderWithProviders(<Game/>);
    expect(screen.getByText(/new game/i)).toBeInTheDocument();
    expect(screen.getByText(/show keyboard/i)).toBeInTheDocument();
    expect(screen.getByText(/layout: en/i)).toBeInTheDocument();
  });
});
