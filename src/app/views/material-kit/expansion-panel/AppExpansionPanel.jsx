import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import SimpleExpansionPanel from "./SimpleExpansionPanel";
import ControlledExpansionPanels from "./ControlledAccordion";
import DetailedExpansionPanel from "./DetailedExpansionPanel";
import CustomizedExpansionPanels from "./CustomizedExpansionPanel";

const AppExpansionPanel = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Expansion Panel" }
          ]}
        />
      </div>
      <SimpleCard title="simple expansion panel">
        <SimpleExpansionPanel />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Controlled Accordion">
        <ControlledExpansionPanels />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Secondary heading and Columns">
        <DetailedExpansionPanel />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Customized expansion panels">
        <CustomizedExpansionPanels />
      </SimpleCard>
    </div>
  );
};

export default AppExpansionPanel;
