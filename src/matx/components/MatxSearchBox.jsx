import React, { Component } from "react";
import { Icon, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&::placeholder": {
      color: theme.palette.primary.contrastText
    }
  }
});

class MatxSearchBox extends Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let { classes } = this.props;
    return (
      <React.Fragment>
        {!this.state.open && (
          <IconButton onClick={this.toggle}>
            <Icon>search</Icon>
          </IconButton>
        )}

        {this.state.open && (
          <div
            className={`flex items-center h-full matx-search-box ${classes.root}`}
          >
            <input
              className={`px-4 search-box w-full ${classes.root}`}
              type="text"
              placeholder="Search here..."
              autoFocus
            />
            <IconButton onClick={this.toggle} className="align-middle mx-4">
              <Icon>close</Icon>
            </IconButton>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MatxSearchBox);
