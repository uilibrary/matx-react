import React from "react";
import RectangleAvatar from "./RectangleAvatar";
import { IconButton, Icon, withStyles } from "@material-ui/core";

const styles = {
  root: {
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 300ms ease",
    "&:hover": {
      background: "rgba(0,0,0, .08)",
      paddingLeft: "8px",
      overflow: "hidden",
      "& .action-icon, & .rectangle-box": {
        opacity: 1
      }
    },
    "& .action-icon, & .rectangle-box": {
      opacity: .76
    }
  }
}

const MatxListItem1 = ({
  title,
  subtitle,
  iconText,
  iconColor,
  bulletIcon,
  actionIcon,
  classes
}) => {
  return (
    <div className={`${classes.root} matx-list-item-1 py-8 flex flex-middle`}>
      <RectangleAvatar
        color={iconColor}
        icon={bulletIcon}
        iconText={iconText}
      ></RectangleAvatar>

      <div className="ml-16 flex-grow-1">
        <h6 className="m-0 font-size-13 font-weight-normal text-body">{title}</h6>
        <small className="text-muted">{subtitle}</small>
      </div>

      {actionIcon && (
        <IconButton className="action-icon">
          <Icon color={iconColor}>{actionIcon}</Icon>
        </IconButton>
      )}
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(MatxListItem1);
