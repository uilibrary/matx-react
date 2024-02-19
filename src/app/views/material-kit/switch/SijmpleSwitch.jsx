import { useState } from "react";
import Switch from "@mui/material/Switch";

export default function SimpleSwitch() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        value="checkedA"
        checked={state.checkedA}
        onChange={handleChange("checkedA")}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Switch
        color="primary"
        value="checkedB"
        checked={state.checkedB}
        onChange={handleChange("checkedB")}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch value="checkedC" inputProps={{ "aria-label": "primary checkbox" }} />
      <Switch disabled value="checkedD" inputProps={{ "aria-label": "disabled checkbox" }} />
      <Switch disabled checked value="checkedE" inputProps={{ "aria-label": "primary checkbox" }} />

      <Switch
        defaultChecked
        value="checkedF"
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
    </div>
  );
}
