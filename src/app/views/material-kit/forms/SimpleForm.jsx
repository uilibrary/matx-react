import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const SimpleForm = () => {
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

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        username,
        firstName,
        creditCard,
        mobile,
        password,
        confirmPassword,
        gender,
        date,
        email,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="username"
                            id="standard-basic"
                            onChange={handleChange}
                            value={username || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Username (Min length 4, Max length 9)"
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="First Name"
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            value={firstName || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Email"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={email || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={date}
                                onChange={handleDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Date picker"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>

                        <TextField
                            sx={{ mb: 4 }}
                            label="Credit Card"
                            onChange={handleChange}
                            type="number"
                            name="creditCard"
                            value={creditCard || ''}
                            validators={[
                                'required',
                                'minStringLength:16',
                                'maxStringLength: 16',
                            ]}
                            errorMessages={['this field is required']}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Mobile Nubmer"
                            onChange={handleChange}
                            type="text"
                            name="mobile"
                            value={mobile || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Password"
                            onChange={handleChange}
                            name="password"
                            type="password"
                            value={password || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Confirm Password"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword || ''}
                            validators={['required', 'isPasswordMatch']}
                            errorMessages={[
                                'this field is required',
                                "password didn't match",
                            ]}
                        />
                        <RadioGroup
                            sx={{ mb: 2 }}
                            value={gender || ''}
                            name="gender"
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel
                                value="Male"
                                control={<Radio color="secondary" />}
                                label="Male"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Female"
                                control={<Radio color="secondary" />}
                                label="Female"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Others"
                                control={<Radio color="secondary" />}
                                label="Others"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="I have read and agree to the terms of service."
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
    )
}

export default SimpleForm
