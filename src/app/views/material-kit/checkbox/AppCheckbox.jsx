import React from 'react'
import SimpleCheckbox from './SimpleCheckbox'
import LabelledCheckbox from './LabelledCheckbox'
import PlacingCheckboxLabel from './PlacingCheckboxLabel'
import FormGroupCheckbox from './FormGroupCheckbox'
import { Breadcrumb, SimpleCard } from 'app/components'

const AppCheckbox = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Chckbox' },
                    ]}
                />
            </div>
            <SimpleCard title="simple checkbox">
                <SimpleCheckbox />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Checkbox with Label">
                <LabelledCheckbox />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Checkbox with Form Group">
                <FormGroupCheckbox />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Checkbox with Different Label Placement">
                <PlacingCheckboxLabel />
            </SimpleCard>
        </div>
    )
}

export default AppCheckbox
