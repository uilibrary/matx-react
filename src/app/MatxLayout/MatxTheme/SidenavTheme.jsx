import React from "react";
import { Helmet } from "react-helmet";

const SidenavTheme = ({ theme, settings }) => {

  function darkHoverStyle() {
    return theme.palette.type === "dark"
      ? `.navigation .nav-item:hover,
        .navigation .nav-item.active {
          color: ${theme.palette.text.primary};
        }`
      : "";
  }

  function lightHoverStyle() {
    return theme.palette.type === "light"
      ? `.navigation .nav-item:hover,
        .navigation .nav-item.active,
        .navigation .submenu {
          background: rgba(0, 0, 0, .08);
        }`
      : "";
  }

  return (
    <Helmet>
      <style>
        {`
        
        ${
          theme.palette.type === "dark"
            ? `.sidenav {
          color: ${theme.palette.text.secondary};
        }`
            : " "
        }

        .sidenav__hold {
          background-image: url(${
            settings.layout1Settings.leftSidebar.bgImgURL
          });
          opacity: 1 !important;
        }
        .sidenav__hold::after {
          background: ${theme.palette.primary.main};
          opacity: ${settings.layout1Settings.leftSidebar.bgOpacity};
        }
        .navigation .nav-item:not(.badge) {
          color: ${theme.palette.text.primary};
        }
        .navigation .nav-item .icon-text::after {
          background: ${theme.palette.text.primary};
        }
        .navigation .nav-item.active, 
        .navigation .nav-item.active:hover {
          background: ${theme.palette.secondary.main};
        }

        
        ${darkHoverStyle()}
        
      `}
      </style>
    </Helmet>
  );
};

export default SidenavTheme;
