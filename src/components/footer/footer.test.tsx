import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import Footer from './footer';

describe('Footer', () => {
  it('Render correct text', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/sanich123/i)).toBeInTheDocument();
    expect(screen.getByText(/irinaiid/i)).toBeInTheDocument();
    expect(screen.getByText(/predmaxim/i)).toBeInTheDocument();
    expect(
      screen.getByText(/© 2023. Special for RS School/i),
    ).toBeInTheDocument();
  });
  it('Render correct alts', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByAltText(/rs-logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/logo-race/i)).toBeInTheDocument();
  });
  it('The document has correct link', () => {
    renderWithProviders(<Footer/>);
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });
});
