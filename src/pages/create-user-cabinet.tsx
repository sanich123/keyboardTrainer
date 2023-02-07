import './create-user-cabinet.scss';
import BgLight404 from '../assets/img/bg-light404.png';
import BgDarck404 from '../assets/img/bg-darck404.png';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { changeLanguage, changeTheme, GlobalStateType } from '../redux/global-state/global-state';
import { GlobalStateType } from '../redux/global-state/global-state';
// import { LANG_VALUES, THEME_VALUES } from '../utils/const';
import { THEME_VALUES } from '../utils/const';
import { applyToLocalStorage, LS_KEYS } from '../utils/local-storage';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default function CreateUserCabinet() {
  // const dispatch = useDispatch();
  const { theme, language, authorization } = useSelector(({ globalState }: { globalState: GlobalStateType }) => globalState);
  applyToLocalStorage(LS_KEYS.globalState, { theme, language, authorization });
  // const isRu = language === LANG_VALUES.ru;
  const isLight = theme === THEME_VALUES.light;

  return (
    <div className="all-div" style={{ background: `url(${isLight ? BgLight404 : BgDarck404})`,
    backgroundSize: 'cover'}}
    >
      {/* <div style={{ background: `${isLight ? 'grey' : 'blue'}` }}>
        <button type="button" onClick={() => dispatch(changeTheme())}>
          {isRu ? 'Поменять тему' : 'Change theme'}
        </button>
        <button type="button" onClick={() => dispatch(changeLanguage())}>
          {isRu ? 'Поменять язык' : 'Change language'}
        </button>
      </div> */}
      <div className="block"></div>
      <Header />
      <div className="main-cabinet">
      </div>
      <Footer />
    </div>
  );
}
