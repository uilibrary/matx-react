import ReactEcharts from 'echarts-for-react';

const option = {
  grid: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  xAxis: {
    show: false,
    type: 'category',
    showGrid: false,
    boundaryGap: false,
  },
  yAxis: {
    show: false,
    type: 'value',
    splitLine: { show: false },
  },
  series: [
    {
      data: [25, 18, 20, 30, 40, 43],
      type: 'line',
      areaStyle: {},
      smooth: true,
    },
  ],
};

const AreaChart = ({ height, color }) => {
  return <ReactEcharts style={{ height: height }} option={{ ...option, color: [...color] }} />;
};

export default AreaChart;
