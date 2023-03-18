import * as echarts from 'echarts';

export const EchartTheme = (MuiTheme) => ({
  backgroundColor: MuiTheme.palette.background.paper,
  // Global palette:
  color: [
    '#7467EF',
    '#ABA4F4',
    '#D3D0F4',
    'rgba(0, 255, 33, 1)',
    '#91c7ae',
    '#749f83',
    '#ca8622',
    '#bda29a',
    '#6e7074',
    '#546570',
    '#c4ccd3'
  ],
  series: [
    { type: 'bar' },
    {
      type: 'pie',
      // A palette only work for the series:
      color: [
        '#37A2DA',
        '#32C5E9',
        '#67E0E3',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293',
        '#E062AE',
        '#E690D1',
        '#e7bcf3',
        '#9d96f5',
        '#8378EA',
        '#96BFFF'
      ]
    },
    {
      type: 'line',
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#83bff6' },
        { offset: 0.5, color: '#188df0' },
        { offset: 1, color: '#188df0' }
      ])
    }
  ]
});
