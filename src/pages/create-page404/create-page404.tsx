import Car404 from '../../assets/img/404-car.webp';
import { Header } from '../../components/header/header';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { Footer } from '../../components/footer/footer';
import { langsData } from '../../components/Settings';
import styles from './create-page404.module.scss';
import { LANG_VALUES } from '../../utils/const';

export default function CreatePage404() {

  const { isRu } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;
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
      <Footer />
    </div >
  );
}
