/* eslint-disable @typescript-eslint/no-unused-vars */
import { renderWithProviders } from '../../../tests/test-utils';
import { TextWindow } from './TextWindow';
import { screen } from '@testing-library/react';

const setIsGame = jest.fn();
const setTime = jest.fn();
const setAccuracy = jest.fn();
const setSpeed = jest.fn();
describe('TextWindow', () => {
  it('should render correctly', () => {
    renderWithProviders(<TextWindow text="asd;lfkj" lang="ru" idx={3} isRightKey isGame setIsGame={setIsGame} setTime={setTime} />);
    expect(screen.getByText(/a/i)).toBeInTheDocument();
    expect(screen.getByText(/s/i)).toBeInTheDocument();
    expect(screen.getByText(/d/i)).toBeInTheDocument();
    expect(screen.getByText(/;/i)).toBeInTheDocument();
    expect(screen.getByText(/l/i)).toBeInTheDocument();
    expect(screen.getByText(/f/i)).toBeInTheDocument();
    expect(screen.getByText(/k/i)).toBeInTheDocument();
    expect(screen.getByText(/j/i)).toBeInTheDocument();
    expect(screen.getByText(/нажми меня для начала/i)).toBeInTheDocument();
  });
});
