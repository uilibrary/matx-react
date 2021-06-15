import React from 'react'
import Chart from 'react-apexcharts'

const InventoryLineChart = () => {
    const series = [
        {
            name: 'Sale',
            data: [14, 29, 18, 20, 20, 40, 20, 30, 24, 18, 30, 15],
        },
    ]

    return <Chart options={options} series={series} type="line" height={400} />
}

export default InventoryLineChart

const options = {
    chart: {
        height: 350,
        type: 'line',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
        },
        toolbar: {
            show: false,
        },
    },
    colors: ['#5d78ff', '#fbaf0f'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 3,
    },
    title: {
        text: '',
        align: 'left',
    },
    grid: {
        // borderColor: "#fff",
        // row: {
        //   colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        //   opacity: 0.5,
        // },
    },
    markers: {
        size: 4,
        hover: {
            size: 6,
        },
    },
    xaxis: {
        categories: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'Spetember',
            'October',
            'November',
            'December',
        ],
        title: {
            text: '',
        },
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        title: {
            text: '',
        },
        // min: 5,
        // max: 40,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
    },
}
