import React from 'react'
import LineChart from './LineChart'
import AreaChart from './AreaChart'
import { useTheme, Box, styled } from '@mui/system'
import DoughnutChart from './Doughnut'
import ComparisonChart from './ComparisonChart'
import AdvanceAreaChart from './AdvanceAreaChart'
import { Breadcrumb, SimpleCard } from 'app/components'
import { H3 } from 'app/components/Typography'
import { Card } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AnalyticsRoot = styled(Card)(({ theme }) => ({
    padding: '28px 32px 32px 32px',
    marginBottom: '24px',
    background: theme.palette.primary.main,
}))

const Header = styled(H3)(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: 'rgba(255, 255, 255, 0.87)',
}))

const AppEchart = () => {
    const theme = useTheme()
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Charts', path: '/' },
                        { name: 'Echarts' },
                    ]}
                />
            </div>

            <AnalyticsRoot>
                <Header>Last 12 months sales</Header>
                <AdvanceAreaChart
                    height="280px"
                    option={{
                        series: [
                            {
                                data: [
                                    34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33,
                                    40,
                                ],
                                type: 'line',
                            },
                        ],
                        xAxis: {
                            data: [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'Jul',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec',
                            ],
                        },
                    }}
                />
            </AnalyticsRoot>

            <SimpleCard title="Doughnut Chart">
                <DoughnutChart
                    height="350px"
                    color={[
                        theme.palette.primary.dark,
                        theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>
            <Box sx={{ py: '12px' }} />
            <SimpleCard title="Line Chart">
                <LineChart
                    height="350px"
                    color={[
                        theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>
            <Box sx={{ py: '12px' }} />
            <SimpleCard title="Comparison Chart">
                <ComparisonChart
                    height="350px"
                    color={[
                        theme.palette.primary.dark,
                        // theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>
            <Box sx={{ py: '12px' }} />
            <SimpleCard title="Area Chart">
                <AreaChart
                    height="350px"
                    color={[theme.palette.primary.main]}
                />
            </SimpleCard>
        </Container>
    )
}

export default AppEchart
