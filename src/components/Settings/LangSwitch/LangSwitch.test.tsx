import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import LangSwitch from './LangSwitch';

const dispatch = jest.fn();
describe('LangSwitch compoenent', () => {
  it('should render correctly', () => {
    renderWithProviders(<LangSwitch dispatch={dispatch} theme="en" lang="ru" />);
    expect(screen.getByText(/англ/i)).toBeInTheDocument();
    expect(screen.getByText(/рус/i)).toBeInTheDocument();
  });
});
