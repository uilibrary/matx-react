import React, { Component } from "react";
import { IconButton, Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { classList } from "utils";
import MatxCustomizer from "../MatxCustomizer/MatxCustomizer";
import ShoppingCart from "../ShoppingCart";
const width = "50px";

const styles = theme => ({
  root: {
    position: "fixed",
    height: "100vh",
    width,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: theme.shadows[8],
    backgroundColor: theme.palette.primary.main,
    zIndex: 98,
    transition: "all 0.15s ease"
  },
  "@global": {
    "@media screen and (min-width: 767px)": {
      ".content-wrap, .layout2.layout-contained, .layout2.layout-full": {
        marginRight: width
      },
      ".matx-customizer": {
        right: width
      }
    },
    "@media screen and (max-width: 959px)": {
      ".toolbar-menu-wrap .menu-area": {
        width: `calc(100% - ${width})`
      }
    }
  }
});

class SecondarySidebarContent extends Component {
  render() {
    let { classes } = this.props;

    return (
      <div
        className={
          classes.root +
          " " +
          classList({
            "secondary-sidebar": true
          })
        }
      >
        <span className="m-auto"></span>

        <MatxCustomizer />

        <ShoppingCart />

        <Link to="/chat">
          <IconButton size="small" aria-label="delete" className="my-3">
            <Icon>comments</Icon>
          </IconButton>
        </Link>

        <span className="m-auto"></span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.layout.settings
});

export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps, {})(SecondarySidebarContent))
);
