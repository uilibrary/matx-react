import React from 'react'
import Chart from 'react-apexcharts'

const InventoryDoughnutChart = () => {
    const series = [75, 50, 25]

    return <Chart options={option} series={series} type="donut" />
}

const option = {
    labels: ['Available', 'Low Stock', 'Out of Stock'],
    stroke: {
        width: 0,
    },
    colors: [
        'rgba(var(--primary), 1)',
        'rgba(var(--secondary), 1)',
        'rgba(var(--error), 1)',
    ],
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
}

export default InventoryDoughnutChart
