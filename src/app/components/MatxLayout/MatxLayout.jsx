import { MatxSuspense } from "app/components";
import useSettings from "app/hooks/useSettings";
import { MatxLayouts } from "./index";

export default function MatxLayout(props) {
  const { settings } = useSettings();
  const Layout = MatxLayouts[settings.activeLayout];

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
}
