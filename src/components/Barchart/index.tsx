'use client';

import { Series } from '@/types';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface BarChartProps {
  chartSeries: Series[];
  categories: string[];
}

export default function Barchart({ chartSeries, categories }: BarChartProps) {
  const options = {
    chart: {
      id: 'apexchart',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Pokemon Stats',
    },
    xaxis: {
      categories: categories,
    },
  };

  return (
    <ApexChart
      options={options}
      series={chartSeries}
      type='bar'
      width={600}
      height={320}
    />
  );
}
