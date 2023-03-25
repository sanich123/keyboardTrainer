/* eslint-disable no-nested-ternary */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateMainPage from '../../pages/create-main/create-main';
import CreateGamePage from '../../pages/create-game/create-game';
import CreatePage404 from '../../pages/create-page404/create-page404';
import CreateUserCabinet from '../../pages/create-user-cabinet/create-user-cabinet';
import { ROUTES } from '../../utils/const';
import '../../styles/entry.scss';
import '../../index.css';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '../loader/loader';

export default function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  const isUserAuthenticated = isAuthenticated ? <CreateUserCabinet /> : <CreateMainPage/>;
  return (
    <Router>
      <Routes>
        <Route path="*" element={<CreatePage404 />} />
        <Route path={ROUTES.main} element={<CreateMainPage />} />
        <Route path={ROUTES.game} element={<CreateGamePage />} />
        <Route path={ROUTES.cabinet} element={isLoading ? <Loader/> : isUserAuthenticated} />
      </Routes>
    </Router>
  );
}
