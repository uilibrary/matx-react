import React from 'react'
import SimpleSwitch from './SijmpleSwitch'
import LabelledSwitch from './LabelledSwitch'
import FormGroupSwitch from './FormGroupSwitch'
import CustomizedSwitch from './CustomizedSwitch'
import PlacingSwitchLabel from './PlacingSwitchLabel'
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

const AppSwitch = () => {
    return (
        <Container>
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Switch' },
                    ]}
                />
            </div>
            <SimpleCard title="Simple Switch">
                <SimpleSwitch />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Switch with Label">
                <LabelledSwitch />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Switch with Form Group">
                <FormGroupSwitch />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Customized Switch">
                <CustomizedSwitch />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Switch with Different Label Placement">
                <PlacingSwitchLabel />
            </SimpleCard>
        </Container>
    )
}

export default AppSwitch
