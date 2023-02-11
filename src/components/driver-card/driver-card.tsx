import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { DRIVER_STATUS, STATS_INFO } from '../../data/stats-info';
import { useGetStatisticsQuery } from '../../redux/keyboard-trainer-api';
import { ROUTES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { BtnPrinary, BtnSecondary } from '../buttons/buttons';
import { langsData } from '../Settings';
import './driver-card.scss';

export default function DriverCard() {
  const { user } = useAuth0();
  const { isRu, isLight } = useThemeLang();
  const { data: statisticData, isLoading, error } = useGetStatisticsQuery(user?.email);

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
    <div
      className={`all-card-driver ${ isLight ? 'card-driver-light' : 'card-driver-darck'}`}
    >
      <div className="photo-block"></div>
      <div className="driver-info-block">
        <h3 className="h3-driver">{`${langsData[lang].pageStatistic.driver}`}</h3>
        <p className="p-driver">
          {`${langsData[lang].pageStatistic.name}`}
          <span className="span-driver">{user?.name}</span>
        </p>
        <p className="p-driver">
          {`${langsData[lang].pageStatistic.status}`}
          <span className="span-driver">{`${status.toUpperCase()}`}</span>
        </p>
        <p className="p-driver">
          {`${langsData[lang].pageStatistic.start}`}
          {isLoading && <span className="span-driver">Loading...</span>}
          {statisticData && <span className="span-driver">{statisticData.firstRace}</span>}
          {error && <span className="span-driver">An error occured</span>}
        </p>
        <div
          className="btns-driver"
          style={{ color: `${isLight ? '#FFFFFF' : '#000000'}` }}
        >
          <BtnSecondary text={`${langsData[lang].pageStatistic.photo}`} />
          <Link to={ROUTES.game}>
            <BtnPrinary text={`${langsData[lang].pageStatistic.startRace}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}
