import React from 'react'

const materialRoutes = [
    {
        path: '/material/table',
        component: React.lazy(() => import('./tables/AppTable')),
    },
    {
        path: '/material/form',
        component: React.lazy(() => import('./forms/AppForm')),
    },
    {
        path: '/material/buttons',
        component: React.lazy(() => import('./buttons/AppButton')),
    },
    {
        path: '/material/icons',
        component: React.lazy(() => import('./icons/AppIcon')),
    },
    {
        path: '/material/progress',
        component: React.lazy(() => import('./AppProgress')),
    },
    {
        path: '/material/menu',
        component: React.lazy(() => import('./menu/AppMenu')),
    },
    {
        path: '/material/checkbox',
        component: React.lazy(() => import('./checkbox/AppCheckbox')),
    },
    {
        path: '/material/switch',
        component: React.lazy(() => import('./switch/AppSwitch')),
    },
    {
        path: '/material/radio',
        component: React.lazy(() => import('./radio/AppRadio')),
    },
    {
        path: '/material/slider',
        component: React.lazy(() => import('./slider/AppSlider')),
    },
    {
        path: '/material/autocomplete',
        component: React.lazy(() => import('./auto-complete/AppAutoComplete')),
    },
    {
        path: '/material/expansion-panel',
        component: React.lazy(() =>
            import('./expansion-panel/AppExpansionPanel')
        ),
    },
    {
        path: '/material/dialog',
        component: React.lazy(() => import('./dialog/AppDialog')),
    },
    {
        path: '/material/snackbar',
        component: React.lazy(() => import('./snackbar/AppSnackbar')),
    },
]

export default materialRoutes
