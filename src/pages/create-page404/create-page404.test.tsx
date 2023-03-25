import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import CreatePage404 from './create-page404';

describe('Page 404', () => {
  it('should render correctly', () => {
    renderWithProviders(<CreatePage404/>);
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(11);
    expect(screen.getAllByRole('button')).toHaveLength(6);
    expect(screen.getAllByRole('img')).toHaveLength(4);
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
