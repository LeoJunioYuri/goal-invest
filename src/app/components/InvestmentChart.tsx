import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface InvestmentChartProps {
  balances: number[];
  labels: number[];
}

const InvestmentChart: React.FC<InvestmentChartProps> = ({ balances, labels }) => {
  const data = {
    labels: labels.map((label) => `Mês ${label}`),
    datasets: [
      {
        label: 'Saldo',
        data: balances,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px', maxWidth: '600px', margin: '0 auto' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default InvestmentChart;
