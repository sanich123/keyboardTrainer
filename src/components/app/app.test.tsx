import { screen, render } from '@testing-library/react';
import { setupStore } from '../../redux/store';
import { Provider } from 'react-redux';
import App from './app';
import { createBrowserHistory } from 'history';
import userEvent from '@testing-library/user-event';
const history = createBrowserHistory();
describe('App', () => {
  it('should correctly renders', () => {
    render(<Provider store={setupStore()}><App /></Provider>);
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getByText(/en/i)).toBeInTheDocument();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(screen.getByText(/irinaiid/i)).toBeInTheDocument();
    expect(screen.getByText(/sanich123/i)).toBeInTheDocument();
    expect(screen.getByText(/predmaxim/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2023. Special for RS School/i)).toBeInTheDocument();
  });
  it('has proper elements by their roles', () => {
    render(<Provider store={setupStore()}><App /></Provider>);
    expect(screen.getAllByRole('link')).toHaveLength(11);
    expect(screen.getAllByRole('button')).toHaveLength(6);
  });
  history.push('j;lkj;lk');
  it('should render 404 page', async () => {
    render(<Provider store={setupStore()}><App /></Provider>);
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getByText(/en/i)).toBeInTheDocument();
    expect(screen.getByText(/ru/i)).toBeInTheDocument();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/irinaiid/i)).toBeInTheDocument();
    expect(screen.getByText(/sanich123/i)).toBeInTheDocument();
    expect(screen.getByText(/predmaxim/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2023. Special for RS School/i)).toBeInTheDocument();
    const homePages = screen.getAllByText(/about/i);
    await userEvent.click(homePages[0]);
    expect(await screen.findByText(/keyboard racing/i)).toBeInTheDocument();
    expect(await screen.findByText(/Start your race! Find out your typing speed and accuracy. Do various/i)).toBeInTheDocument();
  });
});
