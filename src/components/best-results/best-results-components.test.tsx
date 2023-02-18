import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import { BestIndex } from './best-results-components';

describe('Best-result-components', () => {
  it('Should correctly render', () => {
    renderWithProviders(
      <BestIndex
        name="Какое-то имя"
        color={'#FF9C9C'}
        result={585}
      />,
    );
    expect(screen.getByText(/какое-то имя/i)).toBeInTheDocument();
    expect(screen.getByText(/585/i)).toBeInTheDocument();
    expect(screen.getByText(/№/i)).toBeInTheDocument();
  });
});
