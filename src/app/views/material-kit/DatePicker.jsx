import 'date-fns'
import React from 'react'
import { Grid, TextField } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker, TimePicker } from '@mui/lab'

export default function MaterialUIDatePickers() {
    const [selectedDate, setSelectedDate] = React.useState(
        new Date('2014-08-18T21:11:54')
    )
    function handleDateChange(date) {
        setSelectedDate(date)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid
                container
                sx={{ width: '60%' }}
                justify="space-around"
            >
                <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(props) => (
                        <TextField
                            {...props}
                            variant="standard"
                            id="mui-pickers-date"
                            label="Date picker"
                        />
                    )}
                />
                <TimePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(props) => (
                        <TextField
                            {...props}
                            variant="standard"
                            id="mui-pickers-date"
                            label="Time picker"
                        />
                    )}
                />
            </Grid>
        </LocalizationProvider>
    )
}
