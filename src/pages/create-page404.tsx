import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/const';

export default function CreatePage404() {
  return (
    <>
      <h1>Сильно старались, но не смогли найти запрашиваемую страницу.</h1>
      <Link to={ROUTES.main}>
        При желании, можете перейти на главную страницу
      </Link>
      <Link to={ROUTES.game}>Или поиграть</Link>
      <Link to={ROUTES.cabinet}>Ну или если авторизованы, то можете и в кабинет пользователя заглянуть</Link>
      <h2>Или тут потусить, если охота</h2>
    </>
  );
}
