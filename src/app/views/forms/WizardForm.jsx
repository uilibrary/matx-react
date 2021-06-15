import React from 'react'
import { SimpleCard } from 'app/components'
import HorizontalStepper from './HorizontalStepper'
import VerticalStepper from './VerticalStepper'

const WizardForm = () => {
    return (
        <div className="m-sm-30">
            <SimpleCard title="Horizontal Stepper">
                <HorizontalStepper></HorizontalStepper>
            </SimpleCard>
            <div className="py-3"></div>
            <SimpleCard title="Vertical Stepper">
                <VerticalStepper></VerticalStepper>
            </SimpleCard>
        </div>
    )
}

export default WizardForm
