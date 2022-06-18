import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import React from "react";

export default function LabelledSwitch() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        label="Secondary"
        control={
          <Switch checked={state.checkedA} onChange={handleChange("checkedA")} value="checkedA" />
        }
      />

      <FormControlLabel
        label="Primary"
        control={
          <Switch
            color="primary"
            value="checkedB"
            checked={state.checkedB}
            onChange={handleChange("checkedB")}
          />
        }
      />

      <FormControlLabel control={<Switch value="checkedC" />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" />
      <FormControlLabel disabled control={<Switch checked value="checkedE" />} label="Disabled" />
    </FormGroup>
  );
}
