import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import { BtnPrinary, BtnSecondary } from './buttons';

describe('Primary and secondary btns', () => {
  it('BtnPrimary should correctly render', () => {
    renderWithProviders(<BtnPrinary text="Some fucking text" />);
    expect(screen.getByText(/some fucking text/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('BtnSecondary should correctly render', () => {
    renderWithProviders(<BtnSecondary text="Some fucking text" setModal={() => {}} />);
    expect(screen.getByText(/some fucking text/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
