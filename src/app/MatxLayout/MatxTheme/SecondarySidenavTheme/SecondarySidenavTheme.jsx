import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

const SecondarySidenavTheme = ({ theme, classes, children, open }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};
export default SecondarySidenavTheme
