import React from "react";
import SimpleRadio from "./SimpleRadio";
import StandaloneRadio from "./StandaloneRadio";
import PlacingRadioLabel from "./PlacingRadioLabel";
import { Breadcrumb, SimpleCard } from "matx";

const AppRadio = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Radio" }
          ]}
        />
      </div>
      <SimpleCard title="Simple Radio Button">
        <SimpleRadio />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Standalone Radio Button">
        <StandaloneRadio />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Label Placement">
        <PlacingRadioLabel />
      </SimpleCard>
    </div>
  );
};

export default AppRadio;
