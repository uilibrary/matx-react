import React from 'react'
import ContinuousSlider from './ContinuousSlider'
import DiscreteSlider from './DiscreteSlider'
import RangeSlider from './RangeSlider'
import InputSlider from './InputSlider'
import VerticalSlider from './VerticalSlider'
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

const AppSlider = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Slider' },
                    ]}
                />
            </div>
            <SimpleCard title="Continuous Slider">
                <ContinuousSlider />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Discrete Slider">
                <DiscreteSlider />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Range Slider">
                <RangeSlider />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Slider with Input">
                <InputSlider />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Vertical Slider">
                <VerticalSlider />
            </SimpleCard>
        </Container>
    )
}

export default AppSlider
