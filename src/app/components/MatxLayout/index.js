import React from 'react'

export const MatxLayouts = {
    layout1: React.lazy(() => import('./Layout1/Layout1')),
    layout2: React.lazy(() => import('./Layout2/Layout2')),
}
