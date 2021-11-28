import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

function PlacingCheckboxLabel() {
    const [value, setValue] = React.useState('female')

    function handleChange(event) {
        setValue(event.target.value)
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">labelPlacement</FormLabel>
            <FormGroup
                aria-label="position"
                name="position"
                value={value}
                onChange={handleChange}
                row
            >
                <FormControlLabel
                    value="top"
                    control={<Checkbox color="primary" />}
                    label="Top"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Start"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Checkbox color="primary" />}
                    label="Bottom"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="End"
                    labelPlacement="end"
                />
            </FormGroup>
        </FormControl>
    )
}

export default PlacingCheckboxLabel
