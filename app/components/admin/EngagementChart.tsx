'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface EngagementData {
  updatedAt: Date;
  _count: number;
}

interface EngagementChartProps {
  data: EngagementData[];
}

export default function EngagementChart({ data }: EngagementChartProps) {
  const chartData: ChartData<'line'> = {
    labels: data.map(item => new Date(item.updatedAt).toLocaleDateString()),
    datasets: [
      {
        label: 'Daily Engagement',
        data: data.map(item => item._count),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Daily User Engagement',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-64">
      <Line data={chartData} options={options} />
    </div>
  );
}
