import React, { Fragment } from "react";
import Menu from "@material-ui/core/Menu";

const MatxMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const children = React.Children.toArray(props.children);
  let { shouldCloseOnItemClick = true, horizontalPosition = "left" } = props;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <div
        style={{ display: "inline-block" }}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {props.menuButton}
      </div>
      <Menu
        elevation={8}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: horizontalPosition
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: horizontalPosition
        }}
      >
        {children.map((child, index) => (
          <div
            onClick={shouldCloseOnItemClick ? handleClose : () => {}}
            key={index}
          >
            {child}
          </div>
        ))}
      </Menu>
    </Fragment>
  );
};

export default MatxMenu;
