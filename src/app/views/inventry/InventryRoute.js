import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const NewProduct = Loadable(lazy(() => import("./NewProduct")));
const Similar = Loadable(lazy(() => import("./Similar")));
const Sametosame = Loadable(lazy(() => import("./Sametosame")));
const PhotoUpload = Loadable(lazy(() => import("./PhotoUpload")));
const Stock = Loadable(lazy(() => import("./Stock")));
const OnlyStockUpdate = Loadable(lazy(() => import("./OnlyStockUpdate")));
const UpdateProductStatus = Loadable(lazy(() => import("./UpdateProductStatus")));
const LessThen = Loadable(lazy(() => import("./LessThen")));
const UpdateStock = Loadable(lazy(() => import("./UpdateStock")));
const BranchStockDetails = Loadable(lazy(() => import("./BranchStockDetails")));
const BranchStockUpdate = Loadable(lazy(() => import("./BranchStockUpdate")));


const InventryRoute = [
    {
        path: '/inventry/NewProduct',
        element: <NewProduct />,
    },
    {
        path: '/inventry/Similar',
        element: <Similar />,
    },
    {
        path: '/inventry/Sametosame',
        element: <Sametosame />,
    },
    {
        path: '/inventry/PhotoUpload',
        element: <PhotoUpload />,
    },
    {
        path: '/inventry/Stock',
        element: <Stock />,
    },
    {
        path: '/inventry/OnlyStockUpdate',
        element: <OnlyStockUpdate />,
    },
    {
        path: '/inventry/UpdateProductStatus',
        element: <UpdateProductStatus />,
    },
    {
        path: '/inventry/LessThen',
        element: <LessThen />,
    },
    {
        path: '/inventry/UpdateStock',
        element: <UpdateStock />,
    },
    {
        path: '/inventry/BranchStockDetails',
        element: <BranchStockDetails />,
    },
    {
        path: '/inventry/BranchStockUpdate',
        element: <BranchStockUpdate />,
    },


]

export default InventryRoute
