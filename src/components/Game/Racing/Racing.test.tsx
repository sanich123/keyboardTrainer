import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import { Racing } from './Racing';
describe('Racing', () => {
  it('should render correctly', () => {
    renderWithProviders(<Racing gameSpeed={300} isGame lettersNum={25} idx={32} />);
    expect(screen.getAllByAltText(/car/i)).toHaveLength(2);
    expect(screen.getAllByAltText(/start-finish/i)).toHaveLength(4);
    expect(screen.getAllByRole('img')).toHaveLength(6);
  });
});
