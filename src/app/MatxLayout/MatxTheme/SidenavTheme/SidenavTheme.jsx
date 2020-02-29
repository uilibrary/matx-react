import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import SidenavThemeStyles from "./SidenavThemeStyles";

const SidenavTheme = ({ theme, settings, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SidenavThemeStyles theme={theme} settings={settings}>
        {children}
      </SidenavThemeStyles>
    </ThemeProvider>
  );
};

export default SidenavTheme;
