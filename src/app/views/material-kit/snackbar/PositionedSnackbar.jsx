import { Box, Button, Snackbar } from "@mui/material";
import React from "react";

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  function handleClose() {
    setState({ ...state, open: false });
  }

  return (
    <Box>
      <Button onClick={handleClick({ vertical: "top", horizontal: "center" })}>Top-Center</Button>
      <Button onClick={handleClick({ vertical: "top", horizontal: "right" })}>Top-Right</Button>

      <Button onClick={handleClick({ vertical: "bottom", horizontal: "right" })}>
        Bottom-Right
      </Button>

      <Button onClick={handleClick({ vertical: "bottom", horizontal: "center" })}>
        Bottom-Center
      </Button>

      <Button onClick={handleClick({ vertical: "bottom", horizontal: "left" })}>Bottom-Left</Button>

      <Button onClick={handleClick({ vertical: "top", horizontal: "left" })}>Top-Left</Button>

      <Snackbar
        open={open}
        onClose={handleClose}
        key={`${vertical},${horizontal}`}
        anchorOrigin={{ vertical, horizontal }}
        ContentProps={{ "aria-describedby": "message-id" }}
        message={<span id="message-id">I love snacks</span>}
      />
    </Box>
  );
}
