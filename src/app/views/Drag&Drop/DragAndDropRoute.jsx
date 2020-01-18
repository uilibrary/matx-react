import {MatxLoadable} from "matx";

const AppDragAndDrop = MatxLoadable({
  loader: () => import("./AppDragAndDrop")
});

const dragAndDropRoute = [
  {
    path: "/others/drag-and-drop",
    component: AppDragAndDrop
  }
];

export default dragAndDropRoute;
