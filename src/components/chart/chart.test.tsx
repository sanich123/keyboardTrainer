import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import { useAuth0 } from '@auth0/auth0-react';
import { isLoading } from '../../tests/test-const';
import ChartStats from './chart';
jest.mock('@auth0/auth0-react');

describe('Chart', () => {
  it('should correctly render isLoading', async () => {
    (useAuth0 as jest.Mock).mockReturnValue(isLoading);
    renderWithProviders(<ChartStats/>);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
