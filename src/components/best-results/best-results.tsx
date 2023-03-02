import './best-results.scss';
import { langsData } from '../Settings';
import { BestIndex } from './best-results-components';
import { useAuth0 } from '@auth0/auth0-react';
import { useGetStatisticsQuery } from '../../redux/keyboard-trainer-api';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { LANG_VALUES } from '../../utils/const';


export default function BestResults() {
  const { isRu } = useThemeLang();
  const { user } = useAuth0();
  const { data: statisticData, isLoading, error } = useGetStatisticsQuery(user?.nickname);
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;

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
              result={Math.round(Number(statisticData?.averageSpeed))}
            />
            <BestIndex
              name={`${langsData[lang].pageStatistic.accuracy}`}
              color={'#B0FF9C'}
              result={Math.round(Number(statisticData?.averageMistakes))}
            />
          </>
        )}
        {error && <h1>{`${langsData[lang].dataStatus.noDataTenRaces}`}</h1>}
      </div>
    </div>
  );
}
