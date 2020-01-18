import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
// import cssVars from "css-vars-ponyfill";

import { Helmet } from "react-helmet";

class MatxTheme extends Component {
  componentWillReceiveProps() {
    // cssVars();
  }

  componentWillUpdate() {
    // cssVars();
  }

  render() {
    let { children, settings } = this.props;
    let activeTheme = { ...settings.themes[settings.activeTheme] };
    // console.log(activeTheme);

    // activeTheme.direction = settings.direction;
    return (
      <MuiThemeProvider theme={activeTheme}>
        <Helmet>
          <style>
            {`
              :root {
                --primary: ${activeTheme.palette.primary.main};
                --secondary: ${activeTheme.palette.secondary.main};
                --error: ${activeTheme.palette.error.main};
                --bg-default: ${activeTheme.palette.background.default}; 
                --bg-paper: ${activeTheme.palette.background.paper}; 
                --text-body: ${activeTheme.palette.text.primary}; 
                --text-muted: ${activeTheme.palette.text.secondary}; 
                --text-hint: ${activeTheme.palette.text.hint}; 
                --font: Roboto,"Helvetica Neue",sans-serif;
                --font-caption: 400 12px/20px var(--font);
                --font-body-1: 400 14px/20px var(--font);
                --font-body-2: 500 14px/24px var(--font);
                --font-subheading-1: 400 15px/24px var(--font);
                --font-subheading-2: 400 16px/28px var(--font);
                --font-headline: 400 24px/32px var(--font);
                --font-title: 500 18px/26px var(--font);
                --font-display-1: 400 34px/40px var(--font);
                --font-display-2: 400 45px/48px var(--font);
                --font-display-3: 400 56px/56px var(--font);
                --font-display-4: 300 112px/112px var(--font);
                
                ${activeTheme.shadows
                  .map((shadow, i) => {
                    return `--elevation-z${i}: ${shadow};`;
                  })
                  .join(" ")} 

              }
            `}
          </style>
        </Helmet>

        {children}
      </MuiThemeProvider>
    );
  }
}

MatxTheme.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  settings: state.layout.settings,
  setLayoutSettings: PropTypes.func.isRequired
});

export default connect(
  mapStateToProps,
  { setLayoutSettings }
)(MatxTheme);
