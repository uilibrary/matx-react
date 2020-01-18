import React, { Component, Fragment } from "react";
import { format } from "date-fns";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Checkbox,
  Fab,
  Avatar,
  Hidden,
} from "@material-ui/core";

const RowCards = () => {
  return [1, 2, 3, 4].map(id => (
    <Fragment key={id}>
      <Card className="py-8 px-4 project-card">
        <Grid container alignItems="center">
          <Grid item md={5} xs={7}>
            <div className="flex flex-middle">
              <Checkbox />
              <Hidden smDown>
                {id % 2 === 1 ? (
                  <Fab className="ml-4 bg-error box-shadow-none" size="small">
                    <Icon>star_outline</Icon>
                  </Fab>
                ) : (
                  <Fab
                    className="ml-4 bg-green box-shadow-none text-white"
                    size="small"
                  >
                    <Icon>date_range</Icon>
                  </Fab>
                )}
              </Hidden>
              <span className="card__roject-name font-weight-500">
                Project {id}
              </span>
            </div>
          </Grid>

          <Grid item md={3} xs={4}>
            <div className="text-muted">
              {format(new Date().getTime(), "MM/dd/yyyy hh:mma")}
            </div>
          </Grid>

          <Hidden smDown>
            <Grid item xs={3}>
              <div className="flex position-relative face-group">
                <Avatar className="avatar" src="/assets/images/face-4.jpg" />
                <Avatar className="avatar" src="/assets/images/face-4.jpg" />
                <Avatar className="avatar" src="/assets/images/face-4.jpg" />
                <Avatar className="number-avatar avatar">+3</Avatar>
              </div>
            </Grid>
          </Hidden>

          <Grid item xs={1}>
            <div className="flex flex-end">
              <IconButton>
                <Icon>more_vert</Icon>
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Card>
      <div className="py-8" />
    </Fragment>
  ));
};

export default RowCards;
