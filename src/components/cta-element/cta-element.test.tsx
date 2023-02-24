import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import CtaElement from './cta-element';

describe('Cta-element', () => {
  it('Cta-element should correctly render', () => {
    renderWithProviders(<CtaElement setModal={()=> {}}/>);
    expect(screen.getByText(/keyboard racing/i)).toBeInTheDocument();
    expect(screen.getByText(/Start your race! Find out your typing speed and accuracy. Do various races, improve your skills and compete with others. Try different languages and see your results in the "Statistics" section./i)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
