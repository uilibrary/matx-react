import React from 'react'
import LineChart from './LineChart'
import AreaChart from './AreaChart'
import { useTheme, Box, styled } from '@mui/system'
import DoughnutChart from './Doughnut'
import ComparisonChart from './ComparisonChart'
import SimpleCard from 'app/components/cards/SimpleCard'
import Breadcrumb from 'app/components/Breadcrumb/Breadcrumb'

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

const AppEchart = () => {
    const theme = useTheme()
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Charts', path: '/charts' },
                        { name: 'Echarts' },
                    ]}
                />
            </div>

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
