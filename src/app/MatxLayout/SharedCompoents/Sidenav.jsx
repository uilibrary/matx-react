import React, { Component, Fragment } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { navigations } from "../../navigations";
import { MatxVerticalNav } from "matx";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";

class Sidenav extends Component {
  state = {};

  updateSidebarMode = sidebarSettings => {
    let { settings, setLayoutSettings } = this.props;
    let activeLayoutSettingsName = settings.activeLayout+"Settings";
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

  renderOverlay = () => (
    <div
      onClick={() => this.updateSidebarMode({ mode: "close" })}
      className="sidenav__overlay"
    />
  );
  render() {
    return (
      <Fragment>
        <Scrollbar option={{suppressScrollX: true}} className="scrollable position-relative">
          {this.props.children}
          <MatxVerticalNav navigation={navigations} />
        </Scrollbar>
        {this.renderOverlay()}
      </Fragment>
    );
  }
}
Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings
});
export default withRouter(
  connect(
    mapStateToProps,
    {
      setLayoutSettings
    }
  )(Sidenav)
);