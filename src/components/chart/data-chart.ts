import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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

export default function GetDataChartLine(arrData: StatsData[]) {
  const labels = arrData.map(({ date }) => date.slice(0, 10));

  return (
    {
      labels,
      datasets: [
        {
          label: 'Speed',
          data: arrData.map(({ speed }) => speed),
          borderColor: '#D96C6C',
          backgroundColor: '#FF9C9C',
        },
        {
          label: 'Accuracy',
          data: arrData.map(({ mistakes }) => mistakes),
          borderColor: '#81BC72',
          backgroundColor: '#B0FF9C',
        },
      ],
    }
  );
}

