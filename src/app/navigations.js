export const navigations = [
    //dashboard  
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    {
        label: 'PAGES',
        type: 'label',
    },
// users
    {
        name: 'Users',
        icon: 'group',
        children: [
            {
                name: 'Add User',
                iconText: 'SI',
                path: '/users/AddUser',
            },
            {
                name: 'Add Downline User',
                iconText: 'SU',
                path: '/users/AddUserdownline',
            },
            {
                name: 'User Details',
                iconText: 'FP',
                path: '/users/UserDetails',
            },
            {
                name: 'Redeem Points',
                iconText: '404',
                path: '/users/Redeempoint',
            },
            {
                name: 'User All Order',
                iconText: 'SI',
                path: '/users/UserDetails',
            },
            {
                name: 'User Offer Points Details',
                iconText: 'SU',
                path: '/session/signup',
            },
            {
                name: 'User kyc Update',
                iconText: 'FP',
                path: '/users/UserKycUpdate',
            },
            {
                name: 'Update Mobile Number',
                iconText: '404',
                path: '/session/404',
            },
        ],
    },
    // print billing
    {
        name: 'Print Bill',
        path: '/users/Printbill',
        icon: 'assignment',
    },
// orders
{
    name: 'Order Process',
    icon: 'layers',
    children: [
        {
            name: 'Orders',
            iconText: 'SI',
            path: '/orders/Order',
        },
        {
            name: 'Packed',
            iconText: 'SI',
            path: '/orders/Packed',
        },
        {
            name: 'Pending Order',
            iconText: 'SU',
            path: '/orders/Pending',
        },
        {
            name: 'Delivered',
            iconText: 'FP',
            path: '/orders/Delivered',
        },
        {
            name: 'Cancle',
            iconText: '404',
            path: '/orders/Cancle',
        },
        {
            name: 'Return',
            iconText: 'FP',
            path: '/orders/Return',
        },
        {
            name: 'Order Details',
            iconText: '404',
            path: '/session/404',
        },
        {
            name: 'Update Address',
            iconText: '404',
            path: '/session/404',
        },
        {
            name: 'Update Delivery Boy',
            iconText: 'FP',
            path: '/session/forgot-password',
        },
        {
            name: 'Update Packaging Boy',
            iconText: '404',
            path: '/session/404',
        },
        {
            name: 'Last 500',
            iconText: '404',
            path: '/session/404',
        },
    ],
},
 // make order
//  {
//     name: 'Make Order',
//     path: '/dashboard/default',
//     icon: 'local_grocery_store',
// },
// inventory
{
    name: 'Inventory',
    icon: 'view_agenda',
    children: [
        {
            name: 'New Product',
            iconText: 'SI',
            path: '/inventry/NewProduct',
        },
        {
            name: 'Similar',
            iconText: 'SU',
            path: '/inventry/Similar ',
        },
        {
            name: 'Same to Same',
            iconText: 'FP',
            path: '/inventry/Sametosame ',
        },
        {
            name: 'Photos Upload',
            iconText: '404',
            path: '/inventry/PhotoUpload ',
        },
        {
            name: 'Stock',
            iconText: 'SI',
            path: '/inventry/Stock',
        },
        {
            name: 'Only Stock Update',
            iconText: 'SU',
            path: '/inventry/OnlyStockUpdate ',
        },
        {
            name: 'Update Product Status',
            iconText: 'FP',
            path: '/inventry/UpdateProductStatus ',
        },
        {
            name: 'Less',
            iconText: '404',
            path: '/inventry/LessThen',
        },
        {
            name: 'Update Stock',
            iconText: 'FP',
            path: '/inventry/UpdateStock',
        },
        {
            name: 'Branch Stock Details',
            iconText: '404',
            path: '/inventry/BranchStockDetails',
        },
    ],
},
// collection
{
    name: 'Collection',
    icon: 'security',
    children: [
        {
            name: 'Collection',
            iconText: 'SI',
            path: '/Collection/Collections',
        },
        {
            name: 'Collection Report',
            iconText: 'SU',
            path: '/session/signup',
        },
    ],
},
  // print billing
//   {
//     name: 'New Emplyoee',
//     path: '/dashboard/default',
//     icon: 'assignment',
// },
    // {
    //     name: 'Session/Auth',
    //     icon: 'security',
    //     children: [
    //         {
    //             name: 'Sign in',
    //             iconText: 'SI',
    //             path: '/session/signin',
    //         },
    //         {
    //             name: 'Sign up',
    //             iconText: 'SU',
    //             path: '/session/signup',
    //         },
    //         {
    //             name: 'Forgot Password',
    //             iconText: 'FP',
    //             path: '/session/forgot-password',
    //         },
    //         {
    //             name: 'Error',
    //             iconText: '404',
    //             path: '/session/404',
    //         },
    //     ],
    // },
    {
        label: 'Components',
        type: 'label',
    },
    {
        name: 'Components',
        icon: 'favorite',
        badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Auto Complete',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Buttons',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Checkbox',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Dialog',
                path: '/material/dialog',
                iconText: 'D',
            },
            {
                name: 'Expansion Panel',
                path: '/material/expansion-panel',
                iconText: 'E',
            },
            {
                name: 'Form',
                path: '/material/form',
                iconText: 'F',
            },
            {
                name: 'Icons',
                path: '/material/icons',
                iconText: 'I',
            },
            {
                name: 'Menu',
                path: '/material/menu',
                iconText: 'M',
            },
            {
                name: 'Progress',
                path: '/material/progress',
                iconText: 'P',
            },
            {
                name: 'Radio',
                path: '/material/radio',
                iconText: 'R',
            },
            {
                name: 'Switch',
                path: '/material/switch',
                iconText: 'S',
            },
            {
                name: 'Slider',
                path: '/material/slider',
                iconText: 'S',
            },
            {
                name: 'Snackbar',
                path: '/material/snackbar',
                iconText: 'S',
            },
            {
                name: 'Table',
                path: '/material/table',
                iconText: 'T',
            },
        ],
    },
    // {
    //     name: 'Charts',
    //     icon: 'trending_up',

    //     children: [
    //         {
    //             name: 'Echarts',
    //             path: '/charts/echarts',
    //             iconText: 'E',
    //         },
    //     ],
    // },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
]
