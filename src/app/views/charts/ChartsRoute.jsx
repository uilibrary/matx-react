import { authRoles } from 'app/auth/authRoles';
import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppEchart = Loadable(lazy(() => import('./echarts/AppEchart')));

const chartsRoute = [{ path: '/charts/echarts', element: <AppEchart />, auth: authRoles.editor }];

export default chartsRoute;
