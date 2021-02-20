import React from 'react'
import { MatxLayouts } from './index'
import { MatxSuspense } from 'app/components'
import useSettings from 'app/hooks/useSettings'

const MatxLayout = (props) => {
    const { settings } = useSettings()
    const Layout = MatxLayouts[settings.activeLayout]

    return (
        <MatxSuspense>
            <Layout {...props} />
        </MatxSuspense>
    )
}

export default MatxLayout
