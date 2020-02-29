import React from "react";
import { connect } from "react-redux";
import SecondarySidebarToggle from "./SecondarySidebarToggle";
import SecondarySidebarContent from "./SecondarySidebarContent";
import SecondarySidenavTheme from "../../MatxTheme/SecondarySidenavTheme/SecondarySidenavTheme";

const SecondarySidebar = ({ settings }) => {
  const secondarySidebarTheme =
    settings.themes[settings.secondarySidebar.theme];

  return (
    <SecondarySidenavTheme theme={secondarySidebarTheme}>
      {settings.secondarySidebar.open && (
        <SecondarySidebarContent />
      )}
      <SecondarySidebarToggle />
    </SecondarySidenavTheme>
  );
};

const mapStateToProps = state => ({
  settings: state.layout.settings
});

export default connect(mapStateToProps, {})(SecondarySidebar);
