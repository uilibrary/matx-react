import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@material-ui/core";
import TouchRipple from "@material-ui/core/ButtonBase";
import MatxVerticalNavExpansionPanel from "./MatxVerticalNavExpansionPanel";
import { withStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";

const styles = theme => ({
  expandIcon: {
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(90deg)"
  },
  collapseIcon: {
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(0deg)"
  }
});

const MatxVerticalNav = props => {
  const navigations = useSelector(({ navigations }) => navigations);

  const renderLevels = data => {
    return data.map((item, index) => {
      if (item.children) {
        return (
          <MatxVerticalNavExpansionPanel item={item} key={index}>
            {renderLevels(item.children)}
          </MatxVerticalNavExpansionPanel>
        );
      } else if (item.type === "extLink") {
        return (
          <a
            key={index}
            href={item.path}
            className="nav-item"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TouchRipple key={item.name} name="child" className="w-full">
              {(() => {
                if (item.icon) {
                  return (
                    <Icon className="item-icon align-middle">{item.icon}</Icon>
                  );
                } else {
                  return (
                    <span className="item-icon icon-text">{item.iconText}</span>
                  );
                }
              })()}
              <span className="align-middle item-text">{item.name}</span>
              <div className="mx-auto"></div>
              {item.badge && (
                <div className={`badge bg-${item.badge.color}`}>
                  {item.badge.value}
                </div>
              )}
            </TouchRipple>
          </a>
        );
      } else {
        return (
          <NavLink key={index} to={item.path} className="nav-item">
            <TouchRipple key={item.name} name="child" className="w-full">
              {(() => {
                if (item.icon) {
                  return (
                    <Icon className="item-icon align-middle">{item.icon}</Icon>
                  );
                } else {
                  return (
                    <span className="item-icon icon-text">{item.iconText}</span>
                  );
                }
              })()}
              <span className="align-middle item-text">{item.name}</span>
              <div className="mx-auto"></div>
              {item.badge && (
                <div className={`badge bg-${item.badge.color}`}>
                  {item.badge.value}
                </div>
              )}
            </TouchRipple>
          </NavLink>
        );
      }
    });
  };

  return <div className="navigation">{renderLevels(navigations)}</div>;
};

export default withStyles(styles)(MatxVerticalNav);
