import React from "react";
import SimpleSwitch from "./SijmpleSwitch";
import LabelledSwitch from "./LabelledSwitch";
import FormGroupSwitch from "./FormGroupSwitch";
import CustomizedSwitch from "./CustomizedSwitch";
import PlacingSwitchLabel from "./PlacingSwitchLabel";
import { Breadcrumb, SimpleCard } from "matx";

const AppSwitch = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Switch" }
          ]}
        />
      </div>
      <SimpleCard title="Simple Switch">
        <SimpleSwitch />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Switch with Label">
        <LabelledSwitch />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Switch with Form Group">
        <FormGroupSwitch />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Customized Switch">
        <CustomizedSwitch />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Switch with Different Label Placement">
        <PlacingSwitchLabel />
      </SimpleCard>
    </div>
  );
};

export default AppSwitch;
