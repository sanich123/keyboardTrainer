import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import CreatePage404 from './create-page404';

describe('Page 404', () => {
  it('should render correctly', () => {
    renderWithProviders(<CreatePage404/>);
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByAltText(/settings/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(8);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
