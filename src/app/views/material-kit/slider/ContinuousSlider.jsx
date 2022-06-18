import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Box, Slider, Stack, Typography } from "@mui/material";
import React from "react";

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box width={200}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>

      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}
