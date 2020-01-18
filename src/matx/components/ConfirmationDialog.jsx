import React from "react";
import { Dialog, Button } from "@material-ui/core";

const ConfirmationDialog = ({
  open,
  onConfirmDialogClose,
  text,
  title = "confirm",
  onYesClick
}) => {
  return (
    <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={open}
      onClose={onConfirmDialogClose}
    >
      <div className="pt-24 px-20 pb-8">
        <h4 className="capitalize">{title}</h4>
        <p>{text}</p>
        <div className="flex flex-space-between pt-8">
          <Button onClick={onYesClick} variant="contained" color="primary">
            Yes
          </Button>
          <Button
            onClick={onConfirmDialogClose}
            variant="contained"
            color="secondary"
          >
            No
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationDialog;
