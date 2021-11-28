import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import AutocompleteCombo from './AutocompleteCombo'
import AsyncAutocomplete from './AsyncAutocomplete'
import BadgeAutocomplete from './BadgeAutocomplete'
import { Box, styled } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AppAutoComplete = () => {
    return (
        <Container>
            <div className="breadcrumb">
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
            <Box py="12px" />
            <SimpleCard title="Asyncronous Autocomplete">
                <AsyncAutocomplete></AsyncAutocomplete>
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Asyncronous Autocomplete">
                <BadgeAutocomplete></BadgeAutocomplete>
            </SimpleCard>
        </Container>
    )
}

export default AppAutoComplete
