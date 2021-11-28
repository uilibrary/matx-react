import React from 'react'
import { Box } from '@mui/system'
import { Slider, Typography } from '@mui/material'

function valuetext(value) {
    return `${value}°C`
}

export default function RangeSlider() {
    const [value, setValue] = React.useState([20, 37])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box width={300}>
            <Typography id="range-slider" gutterBottom>
                Temperature range
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </Box>
    )
}
