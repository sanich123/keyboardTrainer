import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from '../src/redux/store';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={setupStore()}>
    <Auth0Provider
      domain="dev-kkpxuz5wno1xyv3k.us.auth0.com"
      clientId="gioM2svcUzYfHdAp4EpdjrZJzP76h3gA"
      authorizationParams={{
        // eslint-disable-next-line camelcase
        redirect_uri: window.location.origin,
      }}
    >
      <ToastContainer />
      <App />
    </Auth0Provider>
  </Provider>,
);
