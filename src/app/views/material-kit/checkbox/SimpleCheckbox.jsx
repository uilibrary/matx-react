import { useState } from "react";
import { Box, Checkbox } from "@mui/material";

export default function SimpleCheckbox() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Box>
      <Checkbox
        value="checkedA"
        checked={state.checkedA}
        onChange={handleChange("checkedA")}
        inputProps={{ "aria-label": "primary checkbox" }}
      />

      <Checkbox
        checked={state.checkedB}
        onChange={handleChange("checkedB")}
        value="checkedB"
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />

      <Checkbox value="checkedC" inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
      <Checkbox disabled value="checkedD" inputProps={{ "aria-label": "disabled checkbox" }} />

      <Checkbox
        disabled
        checked
        value="checkedE"
        inputProps={{ "aria-label": "disabled checked checkbox" }}
      />

      <Checkbox
        checked={state.checkedF}
        onChange={handleChange("checkedF")}
        value="checkedF"
        indeterminate
        inputProps={{ "aria-label": "indeterminate checkbox" }}
      />

      <Checkbox
        defaultChecked
        color="default"
        value="checkedG"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
    </Box>
  );
}
