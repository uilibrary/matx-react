import React, { Component } from "react";
import { Icon, IconButton, Hidden } from "@material-ui/core";
import { classList } from "utils";

class MatxToolbarMenu extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let { offsetTop, children } = this.props;

    return (
      <div
        className={classList({
          "toolbar-menu-wrap": true,
          open: this.state.open
        })}
      >
        <Hidden mdUp>
          <IconButton onClick={this.handleToggle}>
            <Icon>{this.state.open ? "close" : "more_vert"}</Icon>
          </IconButton>
        </Hidden>

        <div
          style={{ top: offsetTop }}
          className="flex flex-middle menu-area container"
        >
          {children}
        </div>
      </div>
    );
  }
}

export default MatxToolbarMenu;
