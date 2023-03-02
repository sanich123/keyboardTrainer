import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import { Settings } from './Settings';

describe('Settings', () => {
  it('Should correctly render', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByText(/ru/i)).toBeInTheDocument();
    expect(screen.getByText(/en/i)).toBeInTheDocument();
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getByText(/light/i)).toBeInTheDocument();
    expect(screen.getByText(/dark/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(5);
  });
});
