import { Box, Button, Slide, Snackbar } from "@mui/material";
import { useState } from "react";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const DirectionSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [TransitionType, setTransitionType] = useState(undefined);

  const handleClick = (slideDirection) => () => {
    setOpen(true);
    setTransitionType(() => slideDirection);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleClick(TransitionLeft)}>Right</Button>
      <Button onClick={handleClick(TransitionUp)}>Up</Button>
      <Button onClick={handleClick(TransitionRight)}>Left</Button>
      <Button onClick={handleClick(TransitionDown)}>Down</Button>

      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={TransitionType}
        ContentProps={{ "aria-describedby": "message-id" }}
        message={<span id="message-id">I love snacks</span>}
      />
    </Box>
  );
};

export default DirectionSnackbar;
