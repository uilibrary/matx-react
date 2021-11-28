import React from 'react'

const chatRoutes = [
    {
        path: '/chat',
        component: React.lazy(() => import('./AppChat')),
    },
]

export default chatRoutes
