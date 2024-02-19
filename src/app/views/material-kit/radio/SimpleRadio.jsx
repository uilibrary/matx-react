import { useState } from "react";
import { styled, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const RadioRoot = styled("div")(({ theme }) => ({
  display: "flex",
  "& .group": { margin: theme.spacing(1, 0) },
  "& .formControl": { marginRight: theme.spacing(3), marginLeft: theme.spacing(3) }
}));

export default function SimpleRadio() {
  const [value, setValue] = useState("female");
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <RadioRoot>
      <FormControl component="fieldset" className="formControl">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          value={value}
          name="gender1"
          className="group"
          aria-label="Gender"
          onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
    </RadioRoot>
  );
}
