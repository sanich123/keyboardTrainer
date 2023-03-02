import { renderWithProviders } from '../../../tests/test-utils';
import { screen } from '@testing-library/react';
import { TrafficLight } from './TrafficLight';

describe('TrafficLight', () => {
  it('should render correctly', () => {
    renderWithProviders(<TrafficLight id="speed" color="red" textInfo="ajl" textDesc="jlk" unit="jlkj"/>);
    expect(screen.getByText(/ajl/i)).toBeInTheDocument();
    expect(screen.getByText(/jlkj/i)).toBeInTheDocument();
  });
});
