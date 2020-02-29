import React, { useState } from "react";
import { Icon, IconButton, Hidden } from "@material-ui/core";
import { classList } from "Utils";

const TopbarMenu = props => {
  let { offsetTop } = props;
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className={classList({
        "menu-wrap": true,
        open: open
      })}
    >
      <Hidden mdUp>
        <IconButton onClick={handleToggle}>
          <Icon>{open ? "close" : "more_vert"}</Icon>
        </IconButton>
      </Hidden>

      <div
        style={{ top: offsetTop }}
        className="flex items-center menu-area container"
      >
        {props.children}
      </div>
    </div>
  );
};

export default TopbarMenu;
