import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import CssBaseline from "@material-ui/core/CssBaseline";
import MatxCssVars from "./MatxCssVars";

// import cssVars from "css-vars-ponyfill";

const MatxTheme = ({ children, settings }) => {
  let activeTheme = { ...settings.themes[settings.activeTheme] };
  // console.log(activeTheme);
  // cssVars();
  // activeTheme.direction = settings.direction;
  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <MatxCssVars> {children} </MatxCssVars>
    </ThemeProvider>
  );
};

MatxTheme.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  settings: state.layout.settings,
  setLayoutSettings: PropTypes.func.isRequired
});

export default connect(mapStateToProps, { setLayoutSettings })(MatxTheme);
