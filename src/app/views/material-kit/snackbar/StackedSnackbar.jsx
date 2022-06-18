import { Button } from "@mui/material";
import { SnackbarProvider, useSnackbar } from "notistack";
import React from "react";

function StackedSnackbar() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => enqueueSnackbar("I love snacks.");

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a warning message!", { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant("warning")}>Show warning snackbar</Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <StackedSnackbar />
    </SnackbarProvider>
  );
}
