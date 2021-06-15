import React from 'react'
import { Breadcrumb } from 'app/components'
import { Card } from '@material-ui/core'
import BasicMap from './BasicMap'
import MarkerMap from './MarkerMap'

const AppMap = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb routeSegments={[{ name: 'Map' }]} />
            </div>
            <Card>
                <BasicMap />
            </Card>
            <div className="py-3" />
            <Card>
                <MarkerMap />
            </Card>
        </div>
    )
}

export default AppMap
