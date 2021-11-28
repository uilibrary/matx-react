import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import SimpleExpansionPanel from './SimpleExpansionPanel'
import ControlledExpansionPanels from './ControlledAccordion'
import DetailedExpansionPanel from './DetailedExpansionPanel'
import CustomizedExpansionPanels from './CustomizedExpansionPanel'
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

const AppExpansionPanel = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Expansion Panel' },
                    ]}
                />
            </div>
            <SimpleCard title="simple expansion panel">
                <SimpleExpansionPanel />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Controlled Accordion">
                <ControlledExpansionPanels />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Secondary heading and Columns">
                <DetailedExpansionPanel />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Customized expansion panels">
                <CustomizedExpansionPanels />
            </SimpleCard>
        </Container>
    )
}

export default AppExpansionPanel
