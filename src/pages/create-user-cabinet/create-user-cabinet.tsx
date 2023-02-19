import './create-user-cabinet.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { langsData } from '../../components/Settings';
import BestResults from '../../components/best-results/best-results';
import DriverCard from '../../components/driver-card/driver-card';
import Award from '../../components/award/award';
import ChartStats from '../../components/chart/chart';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { useGetStatisticsQuery } from '../../redux/keyboard-trainer-api';
import { useAuth0 } from '@auth0/auth0-react';
import { NUM_RACES_AWARD } from '../../utils/const';


export default function CreateUserCabinet() {

  const { isLight, isRu } = useThemeLang();
  const lang = isRu ? 'ru' : 'en';
  const { user } = useAuth0();
  const { data: statisticData, error, isLoading } = useGetStatisticsQuery(user?.nickname);
  console.log(user);
  console.log(statisticData);


  return (
    <div className={`all-div ${isLight ? 'light-theme' : 'darck-theme'}`}>
      <Header />
      <div className="all-main-cabinet">
        <div className="main-cabinet">
          <div className="block-driver">
            <DriverCard />
          </div>
          <BestResults />
          <div className="chart-section">
            <h2 className="h2-chart">{`${langsData[lang].pageStatistic.chartName}`}</h2>
            {isLoading && <h1>Loading...</h1>}
            { statisticData && (
              <div className={`chart ${isLight ? '' : 'darck-theme-chart'}`}>
                <ChartStats />
              </div>
            ) }
            { error && (
              <p className="p-noinfo-chart">{`${langsData[lang].dataStatus.noDataTenRaces}`}</p>
            ) }
          </div>
          <div className="awaards-section">
            <h2 className="h2-awards">{`${langsData[lang].pageStatistic.award}`}</h2>
            <div className="all-awards">
              <div className="award">
                <Award nameAward={statisticData?.averageSpeed > NUM_RACES_AWARD.speed100 ? 'sp100-on' : 'sp100-off'}
                  text={`${langsData[lang].pageStatistic.sp100}`}
                  width={100}
                />
              </div>
              <div className="award">
                <Award nameAward={statisticData?.averageSpeed > NUM_RACES_AWARD.speed200 ? 'sp200-on' : 'sp200-off'}
                  text={`${langsData[lang].pageStatistic.sp200}`}
                  width={100}
                />
              </div>
              <div className="award">
                <Award nameAward={statisticData?.averageSpeed > NUM_RACES_AWARD.speed300 ? 'sp300-on' : 'sp300-off'}
                  text={`${langsData[lang].pageStatistic.sp300}`}
                  width={100}
                />
              </div>
              <div className="award">
                <Award nameAward={statisticData?.averageMistakes === NUM_RACES_AWARD.accuracy ? 'acc-on' : 'acc-off'}
                  text={`${langsData[lang].pageStatistic.acc}`}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
