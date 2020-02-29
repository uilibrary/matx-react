/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { Fab, IconButton, Icon, useMediaQuery } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { merge } from "lodash";
import PropTypes from "prop-types";
import { classList } from "utils";

const styles = theme => ({
  toggle: {
    position: "fixed",
    right: "-30px",
    bottom: "20px",
    zIndex: 9999,
    transition: "all 0.15s ease",
    "&.open": {
      right: "10px"
    }
  }
});

const SecondarySidebarToggle = ({ classes, settings, setLayoutSettings }) => {
  let isMobile = useMediaQuery("(max-width:767px)");

  const toggle = () => {
    setLayoutSettings(
      merge({}, settings, {
        secondarySidebar: { open: !settings.secondarySidebar.open }
      })
    );
  };

  useEffect(() => {
    setLayoutSettings(
      merge({}, settings, {
        secondarySidebar: { open: !isMobile }
      })
    );
  }, [isMobile, setLayoutSettings]);

  return (
    <div
      className={
        classes.toggle +
        " " +
        classList({
          open: settings.secondarySidebar.open
        })
      }
    >
      {settings.secondarySidebar.open && (
        <IconButton onClick={toggle} size="small" aria-label="toggle">
          <Icon>arrow_right</Icon>
        </IconButton>
      )}
      {!settings.secondarySidebar.open && (
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          className="pr-9"
          onClick={toggle}
        >
          <Icon>arrow_left</Icon>
        </Fab>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  settings: state.layout.settings,
  setLayoutSettings: PropTypes.func.isRequired
});

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, { setLayoutSettings })(SecondarySidebarToggle)
);
