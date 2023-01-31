import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateDemo from '../../pages/create-demo';
import { CreateGamePage } from '../../pages/create-game';
import CreateMainPage from '../../pages/create-main';
import CreatePage404 from '../../pages/create-page404';
import CreateUserCabinet from '../../pages/create-user-cabinet';
import { ROUTES } from '../../utils/const';
//точка входа всех стилей
import '../../styles/entry.scss';
//точка выхода tailwind
import '../../index.css';
import { CreateDemo2 } from '../../pages/create-demo-2';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<CreatePage404 />} />
        <Route path={ROUTES.main} element={<CreateMainPage />} />
        <Route path={ROUTES.game} element={<CreateGamePage />} />
        <Route path={ROUTES.cabinet} element={<CreateUserCabinet />} />
        <Route path={ROUTES.demo} element={<CreateDemo />} />
        <Route path={ROUTES.demo2} element={<CreateDemo2/>} />
      </Routes>
    </Router>
  );
}
