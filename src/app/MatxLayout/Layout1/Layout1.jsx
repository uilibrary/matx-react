import React, { useContext } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import Scrollbar from "react-perfect-scrollbar";
import { classList } from "utils";
import { renderRoutes } from "react-router-config";
import Layout1Topbar from "./Layout1Topbar";
import Layout1Sidenav from "./Layout1Sidenav";
import Footer from "../SharedCompoents/Footer";
import SecondarySidebar from "../SharedCompoents/SecondarySidebar/SecondarySidebar";
import AppContext from "app/appContext";
import { MatxSuspense } from "matx";

const styles = theme => {
  return {
    layout: {
      backgroundColor: theme.palette.background.default
    }
  };
};

const Layout1 = props => {
  const { routes } = useContext(AppContext);
  let { settings, classes, theme } = props;
  let { layout1Settings } = settings;
  const topbarTheme = settings.themes[layout1Settings.topbar.theme];
  let layoutClasses = {
    [classes.layout]: true,
    [`${settings.activeLayout} sidenav-${layout1Settings.leftSidebar.mode} theme-${theme.palette.type} flex`]: true,
    "topbar-fixed": layout1Settings.topbar.fixed
  };

  return (
    <div className={classList(layoutClasses)}>
      {layout1Settings.leftSidebar.show && <Layout1Sidenav />}

      <div className="content-wrap position-relative">
        {layout1Settings.topbar.show && layout1Settings.topbar.fixed && (
          <ThemeProvider theme={topbarTheme}>
            <Layout1Topbar fixed={true} className="elevation-z8" />
          </ThemeProvider>
        )}

        {settings.perfectScrollbar && (
          <Scrollbar className="scrollable-content">
            {layout1Settings.topbar.show && !layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}
            <div className="content">
              <MatxSuspense>{renderRoutes(routes)}</MatxSuspense>
            </div>
            <div className="my-auto" />
            {settings.footer.show && !settings.footer.fixed && <Footer />}
          </Scrollbar>
        )}

        {!settings.perfectScrollbar && (
          <div className="scrollable-content">
            {layout1Settings.topbar.show && !layout1Settings.topbar.fixed && (
              <Layout1Topbar />
            )}
            <div className="content">
              <MatxSuspense>{renderRoutes(routes)}</MatxSuspense>
            </div>
            <div className="my-auto" />
            {settings.footer.show && !settings.footer.fixed && <Footer />}
          </div>
        )}

        {settings.footer.show && settings.footer.fixed && <Footer />}
      </div>
      {settings.secondarySidebar.show && <SecondarySidebar />}
    </div>
  );
};

Layout1.propTypes = {
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings
});

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, { setLayoutSettings })(Layout1)
);
