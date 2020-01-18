import {MatxLoadable} from "matx";

const Layout1 = MatxLoadable({
  loader: () => import("./Layout1/Layout1")
});

export const MatxLayouts = {
  layout1: Layout1
}