import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Orders = Loadable(lazy(() => import("./Order")));
const Pending = Loadable(lazy(() => import("./Pending")));
const Packed = Loadable(lazy(() => import("./Packed")));
const Delivered = Loadable(lazy(() => import("./Delivered")));
const Cancle = Loadable(lazy(() => import("./Cancle")));
const Return = Loadable(lazy(() => import("./Return")));

const OrdersRoutes23 = [
    {
        path: '/orders/Order',
        element: <Orders />,
    },
    {
        path: '/orders/Pending',
        element: <Pending />,
    },
    {
        path: '/orders/Packed',
        element: <Packed />,
    },
    {
        path: '/orders/Delivered',
        element: <Delivered />,
    },
    {
        path: '/orders/Cancle',
        element: <Cancle />,
    },
    {
        path: '/orders/Return',
        element: <Return />,
    },

]

export default OrdersRoutes23
