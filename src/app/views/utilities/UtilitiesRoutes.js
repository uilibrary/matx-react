import React from "react";

const utilitiesRoutes = [
  {
    path: "/utilities/color",
    component: React.lazy(() => import("./Color"))
  },
  {
    path: "/utilities/spacing",
    component: React.lazy(() => import("./Spacing"))
  },
  {
    path: "/utilities/typography",
    component: React.lazy(() => import("./Typography"))
  },
  {
    path: "/utilities/display",
    component: React.lazy(() => import("./Display"))
  },
  {
    path: "/utilities/height-width",
    component: React.lazy(() => import("./HeightWidth"))
  },
  {
    path: "/utilities/position",
    component: React.lazy(() => import("./Position"))
  },
  {
    path: "/utilities/shadow",
    component: React.lazy(() => import("./Shadow"))
  },
  {
    path: "/utilities/misc",
    component: React.lazy(() => import("./MiscClass"))
  }
];

export default utilitiesRoutes;
