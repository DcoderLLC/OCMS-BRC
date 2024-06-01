import { } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [5000, 6000, 7000, 8000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;
