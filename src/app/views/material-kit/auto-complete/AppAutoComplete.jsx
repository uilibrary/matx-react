import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import AutocompleteCombo from './AutocompleteCombo'
import AsyncAutocomplete from './AsyncAutocomplete'
import BadgeAutocomplete from './BadgeAutocomplete'

const AppAutoComplete = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Autocomplete' },
                    ]}
                />
            </div>
            <SimpleCard title="autocomplete combo">
                <AutocompleteCombo />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Asyncronous Autocomplete">
                <AsyncAutocomplete></AsyncAutocomplete>
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Asyncronous Autocomplete">
                <BadgeAutocomplete></BadgeAutocomplete>
            </SimpleCard>
            {/* <div className="py-3" />
      <SimpleCard title="Google Location">
        <LocationAutocomplete></LocationAutocomplete>
      </SimpleCard> */}
        </div>
    )
}

export default AppAutoComplete
