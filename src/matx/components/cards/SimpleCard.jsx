import React from "react";
import { Card } from "@material-ui/core";

const SimpleCard = ({ children, title, subtitle, icon }) => {
  return (
    <Card elevation={6} className="px-24 py-20 h-100">
      <div className="card-title">{title}</div>
      <div className="card-subtitle mb-24">{subtitle}</div>
      {children}
    </Card>
  );
};

export default SimpleCard;
