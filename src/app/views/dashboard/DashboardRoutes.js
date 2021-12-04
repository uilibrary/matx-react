import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Analytics = Loadable(lazy(() => import("./Analytics")));

const dashboardRoutes = [
    {
        path: '/dashboard/default',
        element: <Analytics />,
    },
]

export default dashboardRoutes
