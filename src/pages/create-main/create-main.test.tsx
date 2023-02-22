import {screen} from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import CreateMainPage from './create-main';
describe('Main page', () => {
  it('should render correctly', () => {
    renderWithProviders(<CreateMainPage/>);
    expect(screen.getByText(/keyboard racing/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Start your race! Find out your typing speed and accuracy. Do various races, improve your skills and compete with others. Try different languages and see your results in the "Statistics" section./i,
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getAllByRole('link')).toHaveLength(9);
    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
