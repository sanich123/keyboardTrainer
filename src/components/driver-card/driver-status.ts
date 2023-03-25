import { useAuth0 } from '@auth0/auth0-react';
import { DRIVER_STATUS } from '../../data/stats-info';
import { useGetStatisticsQuery } from '../../redux/keyboard-trainer-api';
import { NUM_RACES_STATUS } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';

export default function GetDriverStatus() {
  const { user } = useAuth0();
  const { data: statisticData, error } = useGetStatisticsQuery(user?.nickname);
  const { isRu } = useThemeLang();
  const lang = isRu ? 'ru' : 'en';
  const countOfRaces = statisticData?.amountOfRaces;

  if (error) {
    return '';
  }

  let status: string;
  if (countOfRaces > NUM_RACES_STATUS.teamled) {
    status = DRIVER_STATUS[lang].teamlead;
  } else if (countOfRaces > NUM_RACES_STATUS.senior) {
    status = DRIVER_STATUS[lang].senior;
  } else if (countOfRaces > NUM_RACES_STATUS.midl) {
    status = DRIVER_STATUS[lang].midl;
  } else {
    status = DRIVER_STATUS[lang].jun;
  }

  return status;
}
