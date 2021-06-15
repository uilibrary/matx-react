import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import SimpleSnackbar from './SimpleSnackbar'
import CustomizedSnackbars from './CustomizedSnackbar'
import PositionedSnackbar from './PositionedSnackbar'
import LongTextSnackbar from './LongLengthSnackbar'
import ConsecutiveSnackbar from './ConsecutiveSnackbar'
import DirectionSnackbar from './DirectionSnackbar'
import IntegrationNotistack from './StackedSnackbar'
import TransitionsSnackbar from './TransitionSnackbar'

const AppSnackbar = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Snackbar' },
                    ]}
                />
            </div>
            <SimpleCard title="simple snackbar">
                <SimpleSnackbar />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="customized snackbar">
                <CustomizedSnackbars />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="positioned snackbar">
                <PositionedSnackbar />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="message length">
                <LongTextSnackbar />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="transition">
                <TransitionsSnackbar />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="consecutive snackbar">
                <ConsecutiveSnackbar />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Control Slide direction">
                <DirectionSnackbar />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="complementary project">
                <IntegrationNotistack />
            </SimpleCard>
        </div>
    )
}

export default AppSnackbar
