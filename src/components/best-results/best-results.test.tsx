import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import BestResults from './best-results';
import { useAuth0 } from '@auth0/auth0-react';
import { isLoading } from '../../tests/test-const';
jest.mock('@auth0/auth0-react');
describe('Best-results', () => {
  it('should render loading markup, when the request is sending to the fake server, and after that should render proper markup', async () => {
    (useAuth0 as jest.Mock).mockReturnValue(isLoading);
    renderWithProviders(<BestResults/>);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/races/i)).toBeInTheDocument();
    expect(await screen.findByText(/speed/i)).toBeInTheDocument();
    expect(await screen.findByText(/400.6/i)).toBeInTheDocument();
    expect(await screen.findByText(/accuracy/i)).toBeInTheDocument();
  });
});
