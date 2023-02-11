import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DRIVER_STATUS, STATS_INFO } from '../../data/stats-info';
import { GlobalStateType } from '../../redux/global-state/global-state';
import { LANG_VALUES, ROUTES, THEME_VALUES } from '../../utils/const';
import { applyToLocalStorage, LS_KEYS } from '../../utils/local-storage';
import { BtnPrinary, BtnSecondary } from '../buttons/buttons';
import { langsData } from '../Settings';
import './driver-card.scss';


export default function DriverCard() {

  const { theme, language, authorization } = useSelector(({ globalState }: { globalState: GlobalStateType }) => globalState);
  applyToLocalStorage(LS_KEYS.globalState, { theme, language, authorization });
  const isRu = language === LANG_VALUES.ru;
  const isLight = theme === THEME_VALUES.light;
  const lang = isRu ? 'ru' : 'en';
  const countOfRaces = STATS_INFO[0].bestResults.races;
  let status: string;
  if (countOfRaces > 100) {
    status = DRIVER_STATUS[lang].teamlead;
  } else if (countOfRaces > 50) {
    status = DRIVER_STATUS[lang].senior;
  } else if (countOfRaces > 25) {
    status = DRIVER_STATUS[lang].midl;
  } else {
    status = DRIVER_STATUS[lang].jun;
  }

  return (
    <div className={ `all-card-driver ${isLight ? 'card-driver-light' : 'card-driver-darck'}` }>
      <div className="photo-block"></div>
      <div className="driver-info-block">
        <h3 className="h3-driver">{`${langsData[lang].pageStatistic.driver}`}</h3>
        <p className="p-driver">{`${langsData[lang].pageStatistic.name}`}
          <span className="span-driver">{`${STATS_INFO[0].user.name.toUpperCase()}`}</span>
        </p>
        <p className="p-driver">{`${langsData[lang].pageStatistic.status}`}
          <span className="span-driver">{`${status.toUpperCase()}`}</span>
        </p>
        <p className="p-driver">{`${langsData[lang].pageStatistic.start}`}
          <span className="span-driver">{`${STATS_INFO[0].user.dateReg}`}</span>
        </p>
        <div className="btns-driver"
          style={{color: `${isLight ? '#FFFFFF' : '#000000'}`}}
        >
          <BtnSecondary text={`${langsData[lang].pageStatistic.photo}`}/>
          <Link to={ROUTES.game}>
            <BtnPrinary text={`${langsData[lang].pageStatistic.startRace}`}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
