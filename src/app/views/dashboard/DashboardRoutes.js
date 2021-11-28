import React from 'react'
import { authRoles } from '../../auth/authRoles'

const dashboardRoutes = [
    {
        path: '/dashboard/default',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    },
]

export default dashboardRoutes
