import React, { Component } from "react";
import { Button } from "@material-ui/core";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div className="flex flex-center flex-middle w-100 h-100vh">
        <div className="flex flex-column flex-center flex-middle" style={{ maxWidth: "320px" }}>
          <img className="mb-32" src="/assets/images/illustrations/404.svg" alt="" />
          <Button
            className="capitalize"
            variant="contained"
            color="primary"
            onClick={() => this.props.history.push("/")}
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }
}

export default NotFound;
