import './best-results.scss';
import { langsData } from '../Settings';
import { BestIndex } from './best-results-components';
// import { STATS_INFO } from '../../data/stats-info';
import { useAuth0 } from '@auth0/auth0-react';
import { useGetStatisticsQuery } from '../../redux/keyboard-trainer-api';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';


export default function BestResults() {
  const { isRu } = useThemeLang();
  const { user } = useAuth0();
  const { data: statisticData, isLoading, error } = useGetStatisticsQuery(user?.nickname);
  const lang = isRu ? 'ru' : 'en';
  console.log(statisticData);
  console.log(user);

  return (
    <div className="all-div-best">
      <h2 className="h2-cabinet">{`${langsData[lang].pageStatistic.h2Best}`}</h2>
      <div className="all-best-indexes">
        {isLoading && <h1>Loading...</h1>}
        {statisticData && (
          <>
            <BestIndex
              name={`${langsData[lang].pageStatistic.countRaces}`}
              color={'#FF9C9C'}
              result={Number(statisticData?.amountOfRaces)}
            />
            <BestIndex
              name={`${langsData[lang].pageStatistic.speed}`}
              color={'#FFE39C'}
              result={Number(statisticData?.averageSpeed)}
            />
            <BestIndex
              name={`${langsData[lang].pageStatistic.accuracy}`}
              color={'#B0FF9C'}
              result={Number(statisticData?.averageMistakes)}
            />
          </>
        )}
        {error && <h1>An error occured</h1>}
      </div>
    </div>
  );
}
