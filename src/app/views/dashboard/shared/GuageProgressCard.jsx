import React from 'react'
import { Card, IconButton, Icon } from '@material-ui/core'
import Chart from 'react-apexcharts'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        position: 'absolute',
        top: 'calc(50% - 24px)',
        left: 'calc(50% - 18px)',
    },
}))

const GaugeProgressCard = () => {
    const classes = useStyles()
    const theme = useTheme()
    const options = {
        chart: {
            // offsetX: 60,
            // offsetY: -20,
        },
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -120,
                endAngle: 120,
                offsetY: 0,
                hollow: {
                    margin: 0,
                    size: '68%',
                },
                dataLabels: {
                    showOn: 'always',
                    name: {
                        show: false,
                    },
                    value: {
                        color: theme.palette.text.primary,
                        fontSize: '24px',
                        fontWeight: '600',
                        // offsetY: -40,
                        offsetY: 38,
                        show: true,
                        formatter: (val, opt) => {
                            return val * 10 + 'K'
                        },
                    },
                },
                track: {
                    background: '#eee',
                    strokeWidth: '100%',
                },
            },
        },
        colors: [theme.palette.primary.main, '#eee'],
        stroke: {
            lineCap: 'round',
        },
        responsive: [
            {
                breakpoint: 767,
                options: {
                    chart: {
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
            },
        ],
    }

    return (
        <Card elevation={3} className="h-full">
            <div className=" px-4 py-3 mb-6 flex justify-between items-center bg-light-gray">
                <span className="font-medium text-muted">STATISTICS</span>
                <IconButton size="small">
                    <Icon>more_horiz</Icon>
                </IconButton>
            </div>
            <div className="relative">
                <Chart
                    options={options}
                    series={[84.2]}
                    type="radialBar"
                    height={200}
                />
                <Icon className={clsx('text-muted text-36', classes.icon)}>
                    people
                </Icon>
            </div>
            <h5 className="text-center font-medium mb-2">Awesome</h5>
            <p className="m-0 text-muted text-center">
                Close to reach 1000k folowers!
            </p>
        </Card>
    )
}

export default GaugeProgressCard
