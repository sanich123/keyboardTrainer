import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import { Racing } from './Racing';
describe('Racing', () => {
  const setWins = jest.fn();
  const setIsEnded = jest.fn();
  it('should render correctly', () => {
    renderWithProviders(<Racing gameSpeed={300} isGame wins={0} setWins={setWins} setIsEnded={setIsEnded} lettersNum={25} idx={32}/>);
    expect(screen.getAllByAltText(/car/i)).toHaveLength(2);
    expect(screen.getAllByAltText(/start-finish/i)).toHaveLength(4);
    expect(screen.getAllByRole('img')).toHaveLength(6);
  });
});
