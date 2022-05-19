import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const Collections = Loadable(lazy(() => import("./Collections")));
const Collection = [
    {
        path: '/Collection/Collections',
        element: <Collections />,
        auth: authRoles.admin,
    },
]

export default Collection
