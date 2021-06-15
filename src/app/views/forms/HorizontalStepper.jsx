import React, { useState } from 'react'
import {
    TextField,
    Icon,
    Button,
    StepLabel,
    Step,
    Stepper,
    Grid,
} from '@material-ui/core'

const getSteps = () => {
    return ['First Name', 'Last Name', 'Address']
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return (
                <form noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextField className="w-full" label="First Name" />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextField className="w-full" label="Middle Name" />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextField className="w-full" label="Last Name" />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextField className="w-full" label="Age" />
                        </Grid>
                    </Grid>
                </form>
            )
        case 1:
            return <TextField label="Company Name"></TextField>
        case 2:
            return <TextField label="Address"></TextField>
        default:
            return ''
    }
}

export default function HorizontalStepper() {
    const [activeStep, setActiveStep] = useState(0)
    const steps = getSteps()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <div className="flex items-center mb-4">
                            <Icon>done</Icon> <span className="ml-2">Done</span>
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep)}
                        <div className="pt-6">
                            <Button
                                variant="contained"
                                color="secondary"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                            <Button
                                className="ml-4"
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1
                                    ? 'Finish'
                                    : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
