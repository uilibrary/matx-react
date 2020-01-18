import React, { Component } from "react";
import { isMobile } from "utils";

class MatxSidenav extends Component {
  handleResizeRef;

  state = {
    mobile: isMobile()
  };

  handleWindowResize = () => {
    return event => {
      if (event.target.innerWidth < 768) {
        this.setState({ mobile: true });
      } else this.setState({ mobile: false });
    };
  };

  componentDidMount() {
    this.handleResizeRef = this.handleWindowResize();
    if (window) window.addEventListener("resize", this.handleResizeRef);
  }

  componentWillUnmount() {
    if (this.handleResizeRef)
      window.removeEventListener("resize", this.handleResizeRef);
  }

  render() {
    let {
      open,
      children,
      toggleSidenav,
      width = "220px",
      bgClass
    } = this.props;

    let { mobile } = this.state;

    return (
      <div className="flex h-100">
        <div
          className={`matx-sidenav bg-default ${bgClass}`}
          style={{ width: open || !mobile ? width : "0px" }}
        >
          {children}
        </div>
        {open && mobile && (
          <div onClick={toggleSidenav} className="matx-sidenav-overlay" />
        )}
      </div>
    );
  }
}

export default MatxSidenav;
