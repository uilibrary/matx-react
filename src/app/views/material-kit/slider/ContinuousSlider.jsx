import React from 'react'
import { Box } from '@mui/system'
import VolumeUp from '@mui/icons-material/VolumeUp'
import VolumeDown from '@mui/icons-material/VolumeDown'
import { Grid, Typography, Slider } from '@mui/material'

export default function ContinuousSlider() {
    const [value, setValue] = React.useState(30)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box width={200}>
            <Typography id="continuous-slider" gutterBottom>
                Volume
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        aria-labelledby="continuous-slider"
                    />
                </Grid>
                <Grid item>
                    <VolumeUp />
                </Grid>
            </Grid>
            <Slider
                disabled
                defaultValue={30}
                aria-labelledby="continuous-slider"
            />
        </Box>
    )
}
