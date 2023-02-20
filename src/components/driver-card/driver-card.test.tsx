import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import { useAuth0 } from '@auth0/auth0-react';
import { isLoading } from '../../tests/test-const';
import DriverCard from './driver-card';

jest.mock('@auth0/auth0-react');

describe('Driver-card', () => {
  it('should correctly render', async () => {
    (useAuth0 as jest.Mock).mockReturnValue(isLoading);
    renderWithProviders(<DriverCard/>);
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/first st/i)).toBeInTheDocument();
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
    expect(screen.getByText(/start race/i)).toBeInTheDocument();
    expect(await screen.findByText(/2002-09-01/i)).toBeInTheDocument();
  });
});
