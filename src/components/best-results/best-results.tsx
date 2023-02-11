import './best-results.scss';
import { langsData } from '../Settings';
import { useSelector } from 'react-redux';
import { applyToLocalStorage, LS_KEYS } from '../../utils/local-storage';
import { LANG_VALUES } from '../../utils/const';
import { GlobalStateType } from '../../redux/global-state/global-state';
import { BestIndex } from './best-results-components';
import { STATS_INFO } from '../../data/stats-info';

export default function BestResults() {
  const { theme, language, authorization } = useSelector(({ globalState }: { globalState: GlobalStateType }) => globalState);
  applyToLocalStorage(LS_KEYS.globalState, { theme, language, authorization });
  const isRu = language === LANG_VALUES.ru;
  // const isLight = theme === THEME_VALUES.light;
  const lang = isRu ? 'ru' : 'en';

  return (
    <div className="all-div-best">
      <h2 className="h2-cabinet">{`${langsData[lang].pageStatistic.h2Best}`}</h2>
      <BestIndex
        name={`${langsData[lang].pageStatistic.countRaces}`}
        span={'№'}
        color={'#FF9C9C'}
        result={STATS_INFO[0].bestResults.races}
      />
      <BestIndex
        name={`${langsData[lang].pageStatistic.speed}`}
        span={`${langsData[lang].pageStatistic.speedMeasure}`}
        color={'#FFE39C'} result={STATS_INFO[0].bestResults.speed}
      />
      <BestIndex
        name={`${langsData[lang].pageStatistic.accuracy}`}
        span={'%'}
        color={'#B0FF9C'} result={STATS_INFO[0].bestResults.accuracy}
      />
    </div>
  );
}
