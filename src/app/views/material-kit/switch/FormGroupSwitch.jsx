import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";

export default function FormGroupSwitch() {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Assign responsibility</FormLabel>

      <FormGroup>
        <FormControlLabel
          label="Gilad Gray"
          control={<Switch checked={state.gilad} onChange={handleChange("gilad")} value="gilad" />}
        />
        <FormControlLabel
          label="Jason Killian"
          control={<Switch checked={state.jason} onChange={handleChange("jason")} value="jason" />}
        />
        <FormControlLabel
          label="Antoine Llorca"
          control={
            <Switch checked={state.antoine} onChange={handleChange("antoine")} value="antoine" />
          }
        />
      </FormGroup>

      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
}
