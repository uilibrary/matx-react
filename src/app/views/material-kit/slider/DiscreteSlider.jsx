import { Box, Slider, styled, Typography } from "@mui/material";

const SliderRoot = styled("div")(({ theme }) => ({
  width: 300,
  "& .margin": { height: theme.spacing(3) },
}));

const marks = [
  { value: 0, label: "0°C" },
  { value: 20, label: "20°C" },
  { value: 37, label: "37°C" },
  { value: 100, label: "100°C" },
];

function valuetext(value) {
  return `${value}°C`;
}
function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSlider() {
  return (
    <SliderRoot>
      <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>

      <Slider
        marks
        step={10}
        defaultValue={20}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
      />

      <Box className="margin" />

      <Typography id="discrete-slider-custom" gutterBottom>
        Custom marks
      </Typography>

      <Slider
        step={10}
        marks={marks}
        defaultValue={20}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
      />

      <div className="margin" />

      <Typography id="discrete-slider-restrict" gutterBottom>
        Restricted values
      </Typography>

      <Slider
        step={null}
        marks={marks}
        defaultValue={20}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby="discrete-slider-restrict"
      />

      <div className="margin" />

      <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography>

      <Slider
        step={10}
        marks={marks}
        defaultValue={80}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
      />
    </SliderRoot>
  );
}
