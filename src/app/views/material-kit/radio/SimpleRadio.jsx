import React from 'react'
import { styled } from '@mui/system'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormHelperText from '@mui/material/FormHelperText'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const RadioRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    '& .formControl': {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
    },
    '& .group': {
        margin: theme.spacing(1, 0),
    },
}))

export default function SimpleRadio() {
    const [value, setValue] = React.useState('female')
    function handleChange(event) {
        setValue(event.target.value)
    }

    return (
        <RadioRoot>
            <FormControl component="fieldset" className='formControl'>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className='group'
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                    />
                    <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                    />
                    <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                    />
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="(Disabled option)"
                    />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" className='formControl'>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender2"
                    className='group'
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="Female"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Male"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="other"
                        control={<Radio color="primary" />}
                        label="Other"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="(Disabled option)"
                        labelPlacement="start"
                    />
                </RadioGroup>
                <FormHelperText>labelPlacement start</FormHelperText>
            </FormControl>
        </RadioRoot>
    )
}
