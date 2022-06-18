import { Box, Button, Menu, MenuItem } from "@mui/material";
import React from "react";

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Box>
      <Button
        variant="outlined"
        aria-haspopup="true"
        onClick={handleClick}
        aria-owns={anchorEl ? "simple-menu" : undefined}
      >
        Open Menu
      </Button>

      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}

export default SimpleMenu;
