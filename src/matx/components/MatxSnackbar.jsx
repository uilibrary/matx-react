import React from "react";
import { IconButton, Icon, Snackbar } from "@material-ui/core";

const MatxSnackbar = ({
  open,
  message,
  duration = 6000,
  horizontal = "center",
  vertical = "bottom",
  handleClose
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: { vertical },
        horizontal: { horizontal }
      }}
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">{message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          // className="check"
          onClick={handleClose}
        >
          <Icon>close</Icon>
        </IconButton>
      ]}
    />
  );
};

export default MatxSnackbar;
