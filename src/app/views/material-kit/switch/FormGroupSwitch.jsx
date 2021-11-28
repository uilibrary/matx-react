import React from 'react'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Switch from '@mui/material/Switch'

export default function FormGroupSwitch() {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true,
    })

    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.checked })
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.gilad}
                            onChange={handleChange('gilad')}
                            value="gilad"
                        />
                    }
                    label="Gilad Gray"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.jason}
                            onChange={handleChange('jason')}
                            value="jason"
                        />
                    }
                    label="Jason Killian"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.antoine}
                            onChange={handleChange('antoine')}
                            value="antoine"
                        />
                    }
                    label="Antoine Llorca"
                />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
        </FormControl>
    )
}
