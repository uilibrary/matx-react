import React from 'react'
import fetch from 'cross-fetch'
import { TextField, CircularProgress, Autocomplete } from '@mui/material'
import { styled } from '@mui/system'

const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
}))

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

export default function AsyncAutocomplete() {
    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState([])
    const loading = open && options.length === 0

    React.useEffect(() => {
        let active = true

        if (!loading) {
            return undefined
        }

        ; (async () => {
            const response = await fetch(
                'https://country.register.gov.uk/records.json?page-size=5000'
            )
            await sleep(1e3) // For demo purposes.
            const countries = await response.json()

            if (active) {
                setOptions(
                    Object.keys(countries).map((key) => countries[key].item[0])
                )
            }
        })()

        return () => {
            active = false
        }
    }, [loading])

    React.useEffect(() => {
        if (!open) {
            setOptions([])
        }
    }, [open])

    return (
        <AutoComplete
            id="asynchronous-demo"
            open={open}
            onOpen={() => {
                setOpen(true)
            }}
            onClose={() => {
                setOpen(false)
            }}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Asynchronous"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? (
                                    <CircularProgress
                                        color="inherit"
                                        size={20}
                                    />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}
