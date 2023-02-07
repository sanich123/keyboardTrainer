import { useSelector } from 'react-redux';
import { GlobalStateType } from '../../redux/global-state/global-state';
import { LANG_VALUES, THEME_VALUES } from '../../utils/const';
import { applyToLocalStorage, LS_KEYS } from '../../utils/local-storage';
import { langsData } from '../Settings';
import './driver-card.scss';


export default function DriverCard() {

  const { theme, language, authorization } = useSelector(({ globalState }: { globalState: GlobalStateType }) => globalState);
  applyToLocalStorage(LS_KEYS.globalState, { theme, language, authorization });
  const isRu = language === LANG_VALUES.ru;
  const isLight = theme === THEME_VALUES.light;
  const lang = isRu ? 'ru' : 'en';

  return (
    <div className={ `all-card-driver ${isLight ? 'card-driver-light' : 'card-driver-darck'}` }>
      <div className="photo-block"></div>
      <div className="driver-info-block">
        <h3 className="h3-driver">{`${langsData[lang].pageStatistic.driver}`}</h3>
      </div>
    </div>
  );
}
