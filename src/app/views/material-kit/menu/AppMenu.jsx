import React from 'react'
import SimpleMenu from './SimpleMenu'
import SelectedMenu from './SelectedMenu'
import CustomizedMenu from './CustomizedMenu'
import MaxHeightMenu from './MaxHeightMenu'
import { Breadcrumb, SimpleCard } from 'app/components'
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

const AppMenu = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Menu' },
                    ]}
                />
            </div>
            <SimpleCard title="simple menu">
                <SimpleMenu />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="selected menu">
                <SelectedMenu />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="customized menu">
                <CustomizedMenu />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="max height menu">
                <MaxHeightMenu />
            </SimpleCard>
        </Container>
    )
}

export default AppMenu
