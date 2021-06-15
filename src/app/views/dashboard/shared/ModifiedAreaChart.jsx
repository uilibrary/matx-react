import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { merge } from 'lodash'

const defaultOption = {
    grid: {
        top: 16,
        left: 36,
        right: 16,
        bottom: 32,
    },
    legend: {},
    tooltip: {
        show: true,
        trigger: 'axis',

        axisPointer: {
            type: 'cross',
            lineStyle: {
                opacity: 0,
            },
        },
        crossStyle: {
            color: '#000',
        },
    },
    series: [
        {
            areaStyle: {},
            smooth: true,
            lineStyle: {
                width: 2,
                color: '#fff',
            },
        },
    ],
    xAxis: {
        show: true,
        type: 'category',
        showGrid: false,
        boundaryGap: false,
        axisLabel: {
            color: '#ccc',
            margin: 20,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        min: 10,
        max: 60,
        axisLabel: {
            color: '#ccc',
            margin: 20,
            fontSize: 13,
            fontFamily: 'roboto',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, .1)',
            },
        },

        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    color: [
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: 'rgba(255,255,255,0.3)', // color at 0% position
                },
                {
                    offset: 1,
                    color: 'rgba(255,255,255,0)', // color at 100% position
                },
            ],
            global: false, // false by default
        },
    ],
}

const ModifiedAreaChart = ({ height, option }) => {
    return (
        <ReactEcharts
            style={{ height: height }}
            option={merge({}, defaultOption, option)}
        />
    )
}

export default ModifiedAreaChart
