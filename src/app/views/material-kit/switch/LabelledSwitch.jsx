import React from 'react'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function LabelledSwitch() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    })

    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.checked })
    }

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange('checkedA')}
                        value="checkedA"
                    />
                }
                label="Secondary"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange('checkedB')}
                        value="checkedB"
                        color="primary"
                    />
                }
                label="Primary"
            />
            <FormControlLabel
                control={<Switch value="checkedC" />}
                label="Uncontrolled"
            />
            <FormControlLabel
                disabled
                control={<Switch value="checkedD" />}
                label="Disabled"
            />
            <FormControlLabel
                disabled
                control={<Switch checked value="checkedE" />}
                label="Disabled"
            />
        </FormGroup>
    )
}
