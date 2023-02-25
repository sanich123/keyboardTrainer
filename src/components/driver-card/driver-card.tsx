import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useGetStatisticsQuery } from '../../redux/keyboard-trainer-api';
import { LANG_VALUES, ROUTES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { BtnPrinary, BtnSecondary } from '../buttons/buttons';
import { langsData } from '../Settings';
import './driver-card.scss';
import GetDriverStatus from './driver-status';

type Modal = {
  setModal: (arg: boolean) => void
};

export default function DriverCard({ setModal }: Modal) {
  const { user } = useAuth0();
  const { isRu, isLight } = useThemeLang();
  const { data: statisticData, isLoading, error } = useGetStatisticsQuery(user?.nickname);

  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;

  return (
    <div
      className={`all-card-driver ${ isLight ? 'card-driver-light' : 'card-driver-darck'}`}
    >
      <div className="photo-block">
        <img src={user?.picture} alt="driver" className="driver-photo" />
      </div>
      <div className="driver-info-block">
        <h3 className="h3-driver">{`${langsData[lang].pageStatistic.driver}`}</h3>
        <p className="p-driver">
          {`${langsData[lang].pageStatistic.name}`}
          <span className="span-driver">{user?.nickname}</span>
        </p>
        <p className="p-driver">
          {`${langsData[lang].pageStatistic.status}`}
          <span className="span-driver  span-driver-status" data-title={`${langsData[lang].pageStatistic.statusDescription}`}>
            {`${GetDriverStatus().toUpperCase()}`}
          </span>
        </p>
        <p className="p-driver">
          {`${langsData[lang].pageStatistic.start}`}
          {isLoading && <span className="span-driver">Loading...</span>}
          {statisticData && <span className="span-driver">{statisticData.firstRace.slice(0, 10)}</span>}
          {error && <span className="span-driver">{`${langsData[lang].dataStatus.noDataFirstRace}`}</span>}
        </p>
        <div
          className="btns-driver"
          // style={{ color: `${isLight ? '#FFFFFF' : '#000000'}` }}
        >
          <BtnSecondary setModal={setModal} text={`${langsData[lang].pageHome.btnRules}`}/>
          <Link to={ROUTES.game}>
            <BtnPrinary text={`${langsData[lang].pageStatistic.startRace}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}
