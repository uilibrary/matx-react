import React, { useState } from 'react'
import { Tabs, Tab } from '@material-ui/core'
import InventoryDashboard from './shared/InventoryDashboard'
import RecentUpdates from './shared/RecentUpdates'

const InventoryManagement = () => {
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div className="analytics m-sm-30">
            <Tabs
                className="mt-4 mb-6"
                value={tabIndex}
                onChange={(e, value) => setTabIndex(value)}
                indicatorColor="primary"
                textColor="primary"
            >
                {['Dashboard', 'Recent Updates'].map((item, ind) => (
                    <Tab
                        className="capitalize"
                        value={ind}
                        label={item}
                        key={ind}
                    />
                ))}
            </Tabs>

            {tabIndex === 0 && <InventoryDashboard />}
            {tabIndex === 1 && <RecentUpdates />}
        </div>
    )
}

export default InventoryManagement
