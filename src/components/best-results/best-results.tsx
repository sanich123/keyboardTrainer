import './best-results.scss';
import { langsData } from '../Settings';
import { BestIndex } from './best-results-components';
import { STATS_INFO } from '../../data/stats-info';
// import { useAuth0 } from '@auth0/auth0-react';
// import { useGetStatisticsQuery } from '../../redux/keyboard-trainer-api';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';


export default function BestResults() {
  const { isRu } = useThemeLang();
  // const { user } = useAuth0();
  // const { data: statisticData, isLoading, error } = useGetStatisticsQuery(user?.email);
  const lang = isRu ? 'ru' : 'en';

  return (
    <div className="all-div-best">
      <h2 className="h2-cabinet">{`${langsData[lang].pageStatistic.h2Best}`}</h2>
      <div className="all-best-indexes">
          <BestIndex
            name={`${langsData[lang].pageStatistic.countRaces}`}
            color={'#FF9C9C'}
            result={STATS_INFO[0].bestResults.races}
          />
          <BestIndex
            name={`${langsData[lang].pageStatistic.speed}`}
            color={'#FFE39C'}
            result={STATS_INFO[0].bestResults.speed}
          />
          <BestIndex
            name={`${langsData[lang].pageStatistic.accuracy}`}
            color={'#B0FF9C'}
            result={STATS_INFO[0].bestResults.accuracy}
          />
      </div>
      {/* {isLoading && <h1>Loading...</h1>}
      {statisticData && (
        <>
          <BestIndex
            name={`${langsData[lang].pageStatistic.countRaces}`}
            span={'№'}
            color={'#FF9C9C'}
            result={STATS_INFO[0].bestResults.races}
          />
          <BestIndex
            name={`${langsData[lang].pageStatistic.speed}`}
            span={`${langsData[lang].pageStatistic.speedMeasure}`}
            color={'#FFE39C'}
            result={STATS_INFO[0].bestResults.speed}
          />
          <BestIndex
            name={`${langsData[lang].pageStatistic.accuracy}`}
            span={'%'}
            color={'#B0FF9C'}
            result={STATS_INFO[0].bestResults.accuracy}
          />
        </>
      )}
      {error && <h1>An error occured</h1>} */}
    </div>
  );
}
