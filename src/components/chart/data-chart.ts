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
import { useAuth0 } from '@auth0/auth0-react';
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
      position: 'bottom' as const,
    },
    title: {
      display: true,
    },
  },
  maintainAspectRatio: false,
};

interface StatsData {
  date: string
  mistakes: number
  name: string
  speed: number
  __v: number
  _id: string

}

export default function GetDataChartLine() {
  const { user } = useAuth0();
  const { data: statisticData } = useGetStatisticsQuery(user?.nickname);

  const arrData: StatsData[] = statisticData;
  const labels = arrData.map((data) => data.date);

  return (
    {
      labels,
      datasets: [
        {
          label: 'Speed',
          data: arrData.map((info) => info.speed),
          borderColor: '#D96C6C',
          backgroundColor: '#FF9C9C',
        },
        {
          label: 'Accuracy',
          data: arrData.map((info) => info.mistakes),
          borderColor: '#81BC72',
          backgroundColor: '#B0FF9C',
        },
      ],
    }
  );
}

