import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import SimpleDialogDemo from './SimpleDialog'
import AlertDialog from './SimpleAlerts'
import AlertDialogSlide from './DialogTransition'
import FormDialog from './FormDialog'
import CustomizedDialogs from './CustomizedDialog'
import FullScreenDialog from './FullScreenDialog'
import MaxWidthDialog from './OptimalSizeDialog'
import ResponsiveDialog from './ResponsiveDialog'
import ConfirmationDialog from './ConfirmationDialog'
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

const AppDialog = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Dialog' },
                    ]}
                />
            </div>
            <SimpleCard title="simple Dialog">
                <SimpleDialogDemo />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="alert dialog">
                <AlertDialog />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="transition">
                <AlertDialogSlide />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="form dialog">
                <FormDialog />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="customized dialog">
                <CustomizedDialogs />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="full-screen dialog">
                <FullScreenDialog />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="optimized size dialog">
                <MaxWidthDialog />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="responsive dialog">
                <ResponsiveDialog />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="confirmation dialog">
                <ConfirmationDialog />
            </SimpleCard>
        </Container>
    )
}

export default AppDialog
