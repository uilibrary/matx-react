import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import IntegrationDownshift from "./Downshift";
import IntegrationReactSelect from "./ReactSelect";
import IntegratedAutosuggest from "./AutoSuggest";

const AppAutoComplete = () => {
  return (
    <div className="m-sm-30">
      <div  className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Autocomplete" }
          ]}
        />
      </div>
      <SimpleCard title="downshift">
        <IntegrationDownshift />
      </SimpleCard>
      <div className="py-12" />
      <SimpleCard title="react select">
        <IntegrationReactSelect />
      </SimpleCard>
      <div className="py-12" />
      <SimpleCard title="react autosuggest">
        <IntegratedAutosuggest />
      </SimpleCard>
    </div>
  );
};

export default AppAutoComplete;
