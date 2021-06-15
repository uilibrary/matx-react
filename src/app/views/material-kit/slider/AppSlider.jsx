import React from 'react'
import ContinuousSlider from './ContinuousSlider'
import DiscreteSlider from './DiscreteSlider'
import RangeSlider from './RangeSlider'
import InputSlider from './InputSlider'
import VerticalSlider from './VerticalSlider'
import { Breadcrumb, SimpleCard } from 'app/components'

const AppSlider = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
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
            <div className="py-3" />
            <SimpleCard title="Discrete Slider">
                <DiscreteSlider />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Range Slider">
                <RangeSlider />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Slider with Input">
                <InputSlider />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Vertical Slider">
                <VerticalSlider />
            </SimpleCard>
        </div>
    )
}

export default AppSlider
