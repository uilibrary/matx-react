import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from 'app/auth/authRoles'

const AppEchart = Loadable(lazy(() => import('./echarts/AppEchart')))

const chartsRoute = [
    {
        path: '/charts/echarts',
        element: <AppEchart />,
        auth: authRoles.editor,
    },
]

export default chartsRoute
