import React from "react";
import { Card, Icon, Button, Divider } from "@material-ui/core";

const CardWidget1 = ({ backgroundClass }) => {
  return (
    <Card
      elevation={3}
      className={`h-100 ${
        backgroundClass ? backgroundClass : "bg-circle-primary"
      }`}
    >
      <div className="flex flex-middle flex-space-between">
        <div className="py-8 ml-24">
          <Icon className="text-white text-middle">person</Icon>
        </div>
        <div className="px-24 py-8" style={{ borderLeft: "1px solid #fff" }}>
          <Button className="capitalize text-white">view details</Button>
        </div>
      </div>
      <Divider className="bg-white" />
      <div className="py-32 px-32 text-white">
        <p className="m-0 mb-8 text-light-white">Last week</p>
        <h2 className="m-0 mb-14 text-white font-weight-300">New Users</h2>
        <h1 className="m-0 text-white">200</h1>
      </div>
    </Card>
  );
};

export default CardWidget1;
