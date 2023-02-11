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
import { LAST_RACES } from '../../data/stats-info';
import { useGetStatisticsQuery } from '../../redux/keyboard-trainer-api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = LAST_RACES.map((data) => data.date);

export const data = {
  labels,
  datasets: [
    {
      label: 'Speed',
      data: LAST_RACES.map((info) => info.speed),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Accuracy',
      data: LAST_RACES.map((info) => info.acc),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function ChartStats() {
  const { user } = useAuth0();
  const { data: statisticData, isLoading, error } = useGetStatisticsQuery(user?.email);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {statisticData && <Line options={options} data={data} width={400} height={200} />}
      {error && <h1>An error occured</h1>}

    </>
  );
}
