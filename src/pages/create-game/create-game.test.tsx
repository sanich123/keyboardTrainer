import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import CreateGamePage from './create-game';
describe('Game page', () => {
  it('should correctly render', () => {
    renderWithProviders(<CreateGamePage/>);
    expect(screen.getByText(/new game/i)).toBeInTheDocument();
    expect(screen.getByText(/click me to start/i)).toBeInTheDocument();
    expect(screen.getByText(/accuracy/i)).toBeInTheDocument();
    expect(screen.getByText(/speed/i)).toBeInTheDocument();
    expect(
      screen.getByText(/elapsed time/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /dark/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
  });
});
