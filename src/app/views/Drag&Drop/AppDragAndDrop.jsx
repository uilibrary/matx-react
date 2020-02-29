import React from "react";
import SimpleListDnD from "./SimpleListDnD";
import { Breadcrumb, SimpleCard } from "matx";
import SimpleHorizontalList from "./SimpleHorizontalList";
import TwoListDnD from "./TwoListDnD";

const AppDragAndDrop = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "others", path: "/drag-and-drop" },
            { name: "Drag and Drop" }
          ]}
        />
      </div>
      <SimpleCard title="Simple List Drag and Drop">
        <SimpleListDnD />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Simple Horizontal List Drag and Drop">
        <SimpleHorizontalList />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Simple Two List Drag and Drop">
        <TwoListDnD />
      </SimpleCard>
    </div>
  );
};

export default AppDragAndDrop;
