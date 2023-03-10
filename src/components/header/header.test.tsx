import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import { useAuth0 } from '@auth0/auth0-react';
import { authorized, nonAuthorized, isLoading } from '../../tests/test-const';
import { Header } from './header';

jest.mock('@auth0/auth0-react');

describe('Header', () => {
  it('Header should render correct elements, when authorization is loading', () => {
    (useAuth0 as jest.Mock).mockReturnValue(isLoading);
    renderWithProviders(<Header />);
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(7);
    expect(screen.getAllByRole('button')).toHaveLength(6);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
  it('Header should render correct elements, when user is authorizated', () => {
    (useAuth0 as jest.Mock).mockReturnValue(authorized);
    renderWithProviders(<Header />);
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(9);
    expect(screen.getAllByRole('button')).toHaveLength(7);
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getAllByRole('listitem')).toHaveLength(6);
  });
  it('Header should render correct elements, when user is not authorizated', () => {
    (useAuth0 as jest.Mock).mockReturnValue(nonAuthorized);
    renderWithProviders(<Header />);
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(7);
    expect(screen.getAllByRole('button')).toHaveLength(6);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});
