import React from 'react'
import SimpleRadio from './SimpleRadio'
import StandaloneRadio from './StandaloneRadio'
import PlacingRadioLabel from './PlacingRadioLabel'
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

const AppRadio = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Radio' },
                    ]}
                />
            </div>
            <SimpleCard title="Simple Radio Button">
                <SimpleRadio />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Standalone Radio Button">
                <StandaloneRadio />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Label Placement">
                <PlacingRadioLabel />
            </SimpleCard>
        </Container>
    )
}

export default AppRadio
