import React from 'react'
import SimpleMenu from './SimpleMenu'
import SelectedMenu from './SelectedMenu'
import CustomizedMenu from './CustomizedMenu'
import MaxHeightMenu from './MaxHeightMenu'
import { Breadcrumb, SimpleCard } from 'app/components'

const AppMenu = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Menu' },
                    ]}
                />
            </div>
            <SimpleCard title="simple menu">
                <SimpleMenu />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="selected menu">
                <SelectedMenu />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="customized menu">
                <CustomizedMenu />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="max height menu">
                <MaxHeightMenu />
            </SimpleCard>
        </div>
    )
}

export default AppMenu
