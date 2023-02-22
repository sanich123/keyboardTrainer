import Car404 from '../../assets/img/404-car.webp';
// import { Link } from 'react-router-dom';
// import { ROUTES } from '../utils/const';
import { Header } from '../../components/header/header';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { Footer } from '../../components/footer/footer';
import { langsData } from '../../components/Settings';
import styles from './create-page404.module.scss';

export default function CreatePage404() {

  const { isRu } = useThemeLang();
  const lang = isRu ? 'ru' : 'en';
  const { notFound } = langsData[lang].pageNotFound as { [key: string]: string };

  return (
    <div className={styles.CreatePage404} >
      <Header />
      <div className={styles.page404}>
        <div className={styles.badge404}>
          <p>404</p>
        </div>

        <h2 className={styles.h1}>
          {notFound}
        </h2>
        <img src={Car404} alt="car-404" />
      </div>
      {/* <h1>Сильно старались, но не смогли найти запрашиваемую страницу.</h1>
      <Link to={ROUTES.main}>
        При желании, можете перейти на главную страницу
      </Link>
      <Link to={ROUTES.game}>Или поиграть</Link>
      <Link to={ROUTES.cabinet}>Ну или если авторизованы, то можете и в кабинет пользователя заглянуть</Link>
      <h2>Или тут потусить, если охота</h2> */}
      <Footer />
    </div >
  );
}
