import React from 'react'
import ModifiedAreaChart from './ModifiedAreaChart'
import { Card, Icon } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const FollowerCard = () => {
    const { palette } = useTheme()

    return (
        <Card className="p-4 mb-6" elevation={3}>
            <div className="flex justify-between items-center">
                <h4 className="m-0">Followers</h4>
                <div className="flex items-center">
                    <h4 className="m-0">860K</h4>
                    <div className="text-center ml-2">
                        <Icon
                            className="block mt--2"
                            size="small"
                            color="primary"
                        >
                            arrow_drop_up
                        </Icon>
                        <div className="text-11 text-muted mt--2">+49%</div>
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
                    },
                    tooltip: {
                        axisPointer: {
                            type: 'line',
                        },
                    },
                    series: [
                        {
                            data: [8, 32, 18, 27, 39, 53, 36],
                            type: 'line',
                            areaStyle: null,
                            smooth: false,
                            lineStyle: {
                                width: 2,
                                color: palette.error.main,
                            },
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
                            // x: 0,
                            // y: 0,
                            // x2: 0,
                            // y2: 1,
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
                            global: false, // false by default
                        },
                    ],
                }}
            />
        </Card>
    )
}

export default FollowerCard
