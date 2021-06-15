import React from 'react'

const mapRoutes = [
    {
        path: '/map',
        component: React.lazy(() => import('./AppMap')),
    },
]

export default mapRoutes
