import { useEffect, useRef } from "react";
import { Paper, Slider, Tooltip, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";

// STYLED COMPONENT
const PaperRoot = styled(Paper)(({ theme }) => ({
  padding: 24,
  width: 300 + 24 * 2,
  "& .margin": { height: theme.spacing(3) }
}));

function ValueLabelComponent({ children, open, value }) {
  const popperRef = useRef(null);

  useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      open={open}
      title={value}
      placement="top"
      enterTouchDelay={0}
      PopperProps={{ popperRef }}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marks = [{ value: 0 }, { value: 20 }, { value: 37 }, { value: 100 }];

const IOSSlider = styled(Slider)(() => ({
  color: "#3880ff",
  height: 2,
  padding: "15px 0",
  "& .thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus,&:hover,&$active": {
      boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      "@media (hover: none)": { boxShadow: iOSBoxShadow }
    }
  },
  "& .active": {},
  "& .valueLabel": {
    left: "calc(-50% + 11px)",
    top: -22,
    "& *": { background: "transparent", color: "#000" }
  },
  "& .track": { height: 2 },
  "& .rail": {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  },
  "& .mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3
  },
  "& .markActive": {
    backgroundColor: "currentColor"
  }
}));

const PrettoSlider = styled(Slider)(() => ({
  height: 8,
  color: "#52af77",
  "& .thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  "& .active": {},
  "& .valueLabel": {
    left: "calc(-50% + 4px)"
  },
  "& .track": {
    height: 8,
    borderRadius: 4
  },
  "& .rail": {
    height: 8,
    borderRadius: 4
  }
}));

const AirbnbSlider = styled(Slider)(() => ({
  height: 3,
  color: "#3a8589",
  padding: "13px 0",
  "& .thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0px 2px 2px",
    "&:focus,&:hover,&$active": {
      boxShadow: "#ccc 0px 2px 3px 1px"
    },
    "& .bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  "& .active": {},
  "& .valueLabel": {
    left: "calc(-50% + 4px)"
  },
  "& .track": {
    height: 3
  },
  "& .rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: 3
  }
}));

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function CustomizedSlider() {
  return (
    <PaperRoot>
      <Typography gutterBottom>iOS</Typography>
      <IOSSlider aria-label="iOS slider" defaultValue={60} marks={marks} valueLabelDisplay="on" />
      <div className="margin" />
      <Typography gutterBottom>pretto.fr</Typography>
      <PrettoSlider valueLabelDisplay="auto" aria-label="Pretto slider" defaultValue={20} />
      <div className="margin" />
      <Typography gutterBottom>Tooltip value label</Typography>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        aria-label="Custom thumb label"
        defaultValue={20}
      />
      <div className="margin" />
      <Typography gutterBottom>Airbnb</Typography>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        aria-label="Airbnb slider"
        defaultValue={[20, 40]}
      />
    </PaperRoot>
  );
}
