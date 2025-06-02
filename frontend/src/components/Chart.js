import React from 'react';
import PropTypes from 'prop-types';
import {
  Line,
  Bar,
  Pie,
  Doughnut,
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const chartTypes = {
  line: Line,
  bar: Bar,
  pie: Pie,
  doughnut: Doughnut,
};

const Chart = ({ type = 'line', data, options, ...props }) => {
  const ChartComponent = chartTypes[type] || Line;
  return <ChartComponent data={data} options={options} {...props} />;
};

Chart.propTypes = {
  type: PropTypes.oneOf(['line', 'bar', 'pie', 'doughnut']),
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

export default Chart;
