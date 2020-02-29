import React from "react";

const dragAndDropRoute = [
  {
    path: "/others/drag-and-drop",
    component: React.lazy(() => import("./AppDragAndDrop"))
  }
];

export default dragAndDropRoute;
