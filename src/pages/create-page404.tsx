import './create-page404.scss';
import BgLight404 from '../assets/img/bg-light404.png';
import BgDarck404 from '../assets/img/bg-darck404.png';
import Num404 from '../assets/img/404-num.png';
import Car404 from '../assets/img/404-car.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/const';
import Header from '../components/header/header';
import { useThemeLang } from '../utils/hooks/use-theme-lang/use-theme-lang';
import Footer from '../components/footer/footer';

export default function CreatePage404() {

  const { isRu, isLight } = useThemeLang();

  return (
    <div className="all-div" style={{ background: `url(${isLight ? BgLight404 : BgDarck404})`,
      backgroundSize: 'cover'}}
    >
      <Header />
      <div className="main">
        <img src={Num404} alt="num-404" />
        <h1 className="h1-page"
          style={{color: `${isLight ? '#000000' : '#FFFFFF'}`}}
        >{isRu ? 'Страница не найдена' : 'Page Not Found'}
        </h1>
        <img src={Car404} alt="car-404" />
      </div>
      <h1>Сильно старались, но не смогли найти запрашиваемую страницу.</h1>
      <Link to={ROUTES.main}>
        При желании, можете перейти на главную страницу
      </Link>
      <Link to={ROUTES.game}>Или поиграть</Link>
      <Link to={ROUTES.cabinet}>Ну или если авторизованы, то можете и в кабинет пользователя заглянуть</Link>
      <h2>Или тут потусить, если охота</h2>
      <Footer />
    </div>
  );
}
