import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import SimpleSnackbar from './SimpleSnackbar'
import CustomizedSnackbars from './CustomizedSnackbar'
import PositionedSnackbar from './PositionedSnackbar'
import LongTextSnackbar from './LongLengthSnackbar'
import ConsecutiveSnackbar from './ConsecutiveSnackbar'
import DirectionSnackbar from './DirectionSnackbar'
import IntegrationNotistack from './StackedSnackbar'
import TransitionsSnackbar from './TransitionSnackbar'
import { Box, styled } from '@mui/system'

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

const AppSnackbar = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Snackbar' },
                    ]}
                />
            </div>
            <SimpleCard title="simple snackbar">
                <SimpleSnackbar />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="customized snackbar">
                <CustomizedSnackbars />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="positioned snackbar">
                <PositionedSnackbar />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="message length">
                <LongTextSnackbar />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="transition">
                <TransitionsSnackbar />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="consecutive snackbar">
                <ConsecutiveSnackbar />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Control Slide direction">
                <DirectionSnackbar />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="complementary project">
                <IntegrationNotistack />
            </SimpleCard>
        </Container>
    )
}

export default AppSnackbar
