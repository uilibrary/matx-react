import {
    Button,
    Icon,
    Grid,
} from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Breadcrumb, SimpleCard } from 'app/components'
const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
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
const Redeempoint = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const {
        mobile, 
        point
    } = state

    return (
        <Container>
                  <SimpleCard >
        <div className="breadcrumb">
            <Breadcrumb
                routeSegments={[
                    { name: 'Redeem Point' },
                ]}
            />
        </div>

        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    <TextField
                            label="Mobile Nubmer"
                            onChange={handleChange}
                            type="number"
                            name="mobile"
                            value={mobile || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                       <TextField
                            label="Point"
                            onChange={handleChange}
                            type="number"
                            name="point"
                            value={point || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>

                   
                </Grid>
                <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Submit
                    </Span>
                </Button>
            </ValidatorForm>
        </div>

        </SimpleCard>
     
    </Container>
    )
}

export default Redeempoint;
