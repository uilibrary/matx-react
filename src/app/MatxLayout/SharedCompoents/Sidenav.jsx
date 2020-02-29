import React, { Fragment } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { navigations } from "../../navigations";
import { MatxVerticalNav } from "matx";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";

const Sidenav = props => {
  const updateSidebarMode = sidebarSettings => {
    let { settings, setLayoutSettings } = props;
    let activeLayoutSettingsName = settings.activeLayout + "Settings";
    let activeLayoutSettings = settings[activeLayoutSettingsName];

    setLayoutSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings
        }
      }
    });
  };

  const renderOverlay = () => (
    <div
      onClick={() => updateSidebarMode({ mode: "close" })}
      className="sidenav__overlay"
    />
  );

  return (
    <Fragment>
      <Scrollbar
        options={{ suppressScrollX: true }}
        className="scrollable position-relative"
      >
        {props.children}
        <MatxVerticalNav navigation={navigations} />
      </Scrollbar>
      {renderOverlay()}
    </Fragment>
  );
};

Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings
  })(Sidenav)
);
