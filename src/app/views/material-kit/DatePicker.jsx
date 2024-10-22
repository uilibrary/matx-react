import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";

export default function MaterialUIDatePickers() {
  const [selectedDate, setSelectedDate] = useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = (date) => setSelectedDate(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container justify="space-around" sx={{ width: "60%" }}>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(props) => (
            <TextField {...props} variant="standard" id="mui-pickers-date" label="Date picker" />
          )}
        />

        <TimePicker
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(props) => (
            <TextField {...props} variant="standard" id="mui-pickers-date" label="Time picker" />
          )}
        />
      </Grid>
    </LocalizationProvider>
  );
}
