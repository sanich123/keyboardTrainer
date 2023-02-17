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
// import { LAST_RACES } from '../../data/stats-info';
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


// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'bottom' as const,
//     },
//     title: {
//       display: true,
//     },
//   },
//   maintainAspectRatio: false,
// };

// const labels = LAST_RACES.map((data) => data.date);

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Speed',
//       data: LAST_RACES.map((info) => info.speed),
//       borderColor: '#D96C6C',
//       backgroundColor: '#FF9C9C',
//     },
//     {
//       label: 'Accuracy',
//       data: LAST_RACES.map((info) => info.acc),
//       borderColor: '#81BC72',
//       backgroundColor: '#B0FF9C',
//     },
//   ],
// };

export default function ChartStats() {
  const { user } = useAuth0();
  const { data: statisticData, isLoading, error } = useGetStatisticsQuery(user?.email);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {/* <Line options={options} data={data}/> */}
      {statisticData && <Line options={options} data={GetDataChartLine()} />}
      {error && <h1>An error occured</h1>}

    </>
  );
}
