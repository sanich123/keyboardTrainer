import './create-user-cabinet.scss';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { langsData } from '../components/Settings';
import BestResults from '../components/best-results/best-results';
import DriverCard from '../components/driver-card/driver-card';
import Award from '../components/award/award';
import { STATS_INFO } from '../data/stats-info';
import ChartStats from '../components/chart/chart';
import { useThemeLang } from '../utils/hooks/use-theme-lang/use-theme-lang';

export default function CreateUserCabinet() {
  const { isLight, isRu } = useThemeLang();
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
