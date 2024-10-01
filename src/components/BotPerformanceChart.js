import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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

const BotPerformanceChart = () => {
  const reportData = useSelector(state => state.report.reportData);

  const data = {
    labels: reportData?.dates || [],
    datasets: [
      {
        label: 'Bot Performance',
        data: reportData?.performance || [],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-gray-50 p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Bot Performance</h2>
      <Line data={data} />
    </div>
  );
};

export default BotPerformanceChart;
