import React from "react";
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    "& .sidenav": {
      "& .sidenav__hold": {
        opacity: "1 !important",
        "&::after": {
          background: theme.palette.primary.main,
          opacity: .96
        },
        "& .nav-item:not(.badge)": {
          color: theme.palette.text.primary
        },
        "& .nav-item": {
          "&.active, &.active:hover": {
            background: theme.palette.secondary.main
          },
          "& .icon-text::after": {
            background: theme.palette.text.primary
          }
        }
      }
    }
  }
});

const SidenavThemeStyles = ({ children, classes }) => {
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles, { withTheme: true })(SidenavThemeStyles);
