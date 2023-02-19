import { useAuth0 } from '@auth0/auth0-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGetStatisticsQuery } from '../../redux/keyboard-trainer-api';
import GetDataChartLine from './data-chart';
import { options } from './data-chart';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);


interface StatsData {
  date: string
  mistakes: number
  name: string
  speed: number
  __v: number
  _id: string

}

export default function ChartStats() {
  const { user } = useAuth0();
  const { data: statisticData, isLoading, error } = useGetStatisticsQuery(user?.nickname);
  const data: StatsData[] = statisticData?.lastTenRaces;
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {statisticData && <Line options={options} data={GetDataChartLine(data)} />}
      {error && <h1>An error occured</h1>}
    </>
  );
}
