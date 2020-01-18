import { MatxLoadable } from "matx";

const AppMap = MatxLoadable({
  loader: () => import("./AppMap")
});

const mapRoutes = [
  {
    path: "/map",
    component: AppMap
  }
];

export default mapRoutes;
