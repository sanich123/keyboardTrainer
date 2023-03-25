import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import { Navigation, LoginNavigation } from './header-components';
import { useAuth0 } from '@auth0/auth0-react';
import { authorized, nonAuthorized, isLoading } from '../../tests/test-const';

jest.mock('@auth0/auth0-react');
describe('Header components should render correctly', () => {
  it('Navigation should render correct links', () => {
    (useAuth0 as jest.Mock).mockReturnValue(authorized);
    renderWithProviders(<Navigation/>);
    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/race/i)).toBeInTheDocument();
  });
  it('LoginNavigation should render correct alt, text and roles, when authorized', () => {
    (useAuth0 as jest.Mock).mockReturnValue(authorized);
    renderWithProviders(<LoginNavigation/>);
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByText(/johndoe@me.com/i)).toBeInTheDocument();
  });

  it ('LoginNavigation should render correct info, when not-authorized', () => {
    (useAuth0 as jest.Mock).mockReturnValue(nonAuthorized);
    renderWithProviders(<LoginNavigation/>);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    const link = screen.getByText(/login/i);
    expect(link).toBeInTheDocument();
  });
  it('LoginNavigation should render correct info, when isLoading', () => {
    (useAuth0 as jest.Mock).mockReturnValue(isLoading);
    renderWithProviders(<LoginNavigation />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
