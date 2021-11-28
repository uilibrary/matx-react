import React from 'react'
import { Box } from '@mui/system'
import VolumeUp from '@mui/icons-material/VolumeUp'
import { Input, Grid, Slider, Typography } from '@mui/material'

export default function InputSlider() {
    const [value, setValue] = React.useState(30)
    const handleSliderChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value))
    }
    const handleBlur = () => {
        if (value < 0) {
            setValue(0)
        } else if (value > 100) {
            setValue(100)
        }
    }

    return (
        <Box width={250}>
            <Typography id="input-slider" gutterBottom>
                Volume
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <VolumeUp />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={value}
                        margin="dense"
                        sx={{ width: 42 }}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
