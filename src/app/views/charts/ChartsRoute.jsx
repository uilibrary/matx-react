import React from 'react'

const chartsRoute = [
    {
        path: '/charts/echarts',
        component: React.lazy(() => import('./echarts/AppEchart')),
    }
]

export default chartsRoute
