import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

export default function PlacingRadioLabel() {
  const [value, setValue] = React.useState("female");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="top"
          label="Top"
          labelPlacement="top"
          control={<Radio color="primary" />}
        />

        <FormControlLabel
          value="start"
          label="Start"
          labelPlacement="start"
          control={<Radio color="primary" />}
        />

        <FormControlLabel
          value="bottom"
          label="Bottom"
          labelPlacement="bottom"
          control={<Radio color="primary" />}
        />

        <FormControlLabel
          value="end"
          label="End"
          labelPlacement="end"
          control={<Radio color="primary" />}
        />
      </RadioGroup>
    </FormControl>
  );
}
