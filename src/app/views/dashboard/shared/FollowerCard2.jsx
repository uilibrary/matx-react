import React from 'react'
import ModifiedAreaChart from './ModifiedAreaChart'
import { Card, Icon } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const FollowerCard2 = () => {
    const { palette } = useTheme()

    return (
        <Card className="p-4" elevation={3}>
            <div className="flex justify-between items-center">
                <h4 className="m-0">One Else Graph</h4>
                <div className="flex items-center">
                    <h4 className="m-0">429K</h4>
                    <div className="text-center ml-2">
                        <Icon
                            className="block mt--2"
                            size="small"
                            color="primary"
                        >
                            arrow_drop_up
                        </Icon>
                        <div className="text-11 text-muted mt--2">+35%</div>
                    </div>
                </div>
            </div>
            <small className="text-muted">System project</small>
            <ModifiedAreaChart
                height="100%"
                option={{
                    grid: {
                        top: 0,
                        left: 10,
                        right: 10,
                        bottom: 32,
                    },
                    tooltip: {
                        axisPointer: {
                            type: 'line',
                        },
                    },
                    series: [
                        {
                            data: [34, 45, 31, 45, 31, 43, 26],
                            type: 'line',
                        },
                    ],
                    xAxis: {
                        data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    },
                    yAxis: {
                        show: false,
                    },
                    color: [
                        {
                            type: 'linear',
                            colorStops: [
                                {
                                    offset: 0,
                                    color: palette.primary.main, // color at 0% position
                                },
                                {
                                    offset: 1,
                                    color: palette.primary.light, // color at 100% position
                                },
                            ],
                        },
                    ],
                }}
            />
        </Card>
    )
}

export default FollowerCard2
