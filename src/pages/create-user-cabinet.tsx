import './create-user-cabinet.scss';
import { useSelector } from 'react-redux';
import { GlobalStateType } from '../redux/global-state/global-state';
import { LANG_VALUES, THEME_VALUES } from '../utils/const';
import { applyToLocalStorage, LS_KEYS } from '../utils/local-storage';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { langsData } from '../components/Settings';
import BestResults from '../components/best-results/best-results';
import DriverCard from '../components/driver-card/driver-card';
import Award from '../components/award/award';
import { STATS_INFO } from '../data/stats-info';
import ChartStats from '../components/chart/chart';


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
        <div className="chart-section">
          <h2 className="h2-chart">{`${langsData[lang].pageStatistic.chartName}`}</h2>
          <div className="chart">
            <ChartStats />
          </div>
        </div>
        <div className="awaards-section">
          <h2 className="h2-awards">{`${langsData[lang].pageStatistic.award}`}</h2>
          <div className="all-awards">
            <Award nameAward={STATS_INFO[0].bestResults.speed > 100 ? 'sp100-on' : 'sp100-off'}
              text={`${langsData[lang].pageStatistic.sp100}`}
            />
            <Award nameAward={STATS_INFO[0].bestResults.speed > 200 ? 'sp200-on' : 'sp200-off'}
              text={`${langsData[lang].pageStatistic.sp200}`}
            />
            <Award nameAward={STATS_INFO[0].bestResults.speed > 300 ? 'sp300-on' : 'sp300-off'}
              text={`${langsData[lang].pageStatistic.sp300}`}
            />
            <Award nameAward={STATS_INFO[0].bestResults.accuracy === 100 ? 'acc-on' : 'acc-off'}
              text={`${langsData[lang].pageStatistic.acc}`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
