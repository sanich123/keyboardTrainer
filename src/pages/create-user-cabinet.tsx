import './create-user-cabinet.scss';
// import BgLight404 from '../assets/img/bg-light404.png';
// import BgDarck404 from '../assets/img/bg-darck404.png';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GlobalStateType } from '../redux/global-state/global-state';
import { LANG_VALUES, THEME_VALUES } from '../utils/const';
import { applyToLocalStorage, LS_KEYS } from '../utils/local-storage';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { langsData } from '../components/Settings';
import BestResults from '../components/best-results/best-results';
import DriverCard from '../components/driver-card/driver-card';

export default function CreateUserCabinet() {
  // const dispatch = useDispatch();
  const { theme, language, authorization } = useSelector(({ globalState }: { globalState: GlobalStateType }) => globalState);
  applyToLocalStorage(LS_KEYS.globalState, { theme, language, authorization });
  const isRu = language === LANG_VALUES.ru;
  const isLight = theme === THEME_VALUES.light;
  const lang = isRu ? 'ru' : 'en';


  return (
    <div className={`all-div ${isLight ? 'light-theme' : 'darck-theme'}`}>
      <Header />
      <div className="main-cabinet">
        <h1 className="h1-cabinet">{`${langsData[lang].pageStatistic.h1}`}</h1>
        <div className="best-first-section">
          <BestResults />
          <DriverCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
