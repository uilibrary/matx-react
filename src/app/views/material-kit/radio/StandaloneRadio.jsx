import { useState } from "react";
import { Box, Radio, styled } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { green } from "@mui/material/colors";

// STYLED COMPONENTS
const GreenRadio = styled(Radio)(() => ({
  color: green[400],
  "&$checked": { color: green[600] }
}));

export default function StandaloneRadio() {
  const [selectedValue, setSelectedValue] = useState("a");

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <Box>
      <Radio
        value="a"
        onChange={handleChange}
        name="radio-button-demo"
        checked={selectedValue === "a"}
      />

      <Radio
        value="b"
        onChange={handleChange}
        name="radio-button-demo"
        checked={selectedValue === "b"}
      />

      <GreenRadio
        value="c"
        color="default"
        onChange={handleChange}
        name="radio-button-demo"
        checked={selectedValue === "c"}
      />

      <Radio
        value="d"
        color="default"
        onChange={handleChange}
        name="radio-button-demo"
        checked={selectedValue === "d"}
      />

      <Radio
        value="e"
        color="default"
        onChange={handleChange}
        name="radio-button-demo"
        checked={selectedValue === "e"}
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
      />
    </Box>
  );
}
