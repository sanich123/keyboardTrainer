import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import { useAuth0 } from '@auth0/auth0-react';
import { authorized, nonAuthorized, isLoading } from '../../tests/test-const';
import Header from './header';

jest.mock('@auth0/auth0-react');

describe('Header', () => {
  it('Header should render correct elements, when user-info isLoading', () => {
    (useAuth0 as jest.Mock).mockReturnValue(isLoading);
    renderWithProviders(<Header/>);
    expect(screen.getByAltText(/settings/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(5);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
  it('Header should render correct elements, when user-info isAuthenticated', () => {
    (useAuth0 as jest.Mock).mockReturnValue(isLoading);
    renderWithProviders(<Header />);
    expect(screen.getByAltText(/settings/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(5);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
