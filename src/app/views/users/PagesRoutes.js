import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const AddUser = Loadable(lazy(() => import("./AddUser")));
const AddUserdownline = Loadable(lazy(() => import("./AddUserdownline")));
const UserDetails = Loadable(lazy(() => import("./UserDetails")));
const Redeempoint = Loadable(lazy(() => import("./Redeempoint")));
const UserKycUpdate = Loadable(lazy(() => import("./UserKycUpdate")));
const Printbill = Loadable(lazy(() => import("./Printbill")));

const PagesRoutes = [
    {
        path: '/users/AddUser',
        element: <AddUser />,
    },
    {
        path: '/users/AddUserdownline',
        element: <AddUserdownline />,
    },
    {
        path: '/users/UserDetails',
        element: <UserDetails />,
    },
    {
        path: '/users/Redeempoint',
        element: <Redeempoint />,
    },
    {
        path: '/users/UserKycUpdate',
        element: <UserKycUpdate />,
    },
    {
        path: '/users/Printbill',
        element: <Printbill />,
    },

]

export default PagesRoutes
