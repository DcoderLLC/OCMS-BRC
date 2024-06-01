import { } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1900, 3000, 5000],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
