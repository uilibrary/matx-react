import React, { useState } from 'react'
import {
    Card,
    TextField,
    Divider,
    MenuItem,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormControl,
    Checkbox,
    Button,
} from '@material-ui/core'
import { countries } from '../ecommerce/Country'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const PropertyListingForm = () => {
    const [date, setDate] = useState(new Date())

    return (
        <Card className="m-sm-30 p-6">
            <div className="max-w-600 mx-auto">
                <h4>Property Listing Inquiry</h4>
                <p>
                    Please fill the form below to know more about the property
                </p>
                <Divider className="mb-8" />

                <TextField
                    className="mb-4"
                    label="Your Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <TextField
                    className="mb-4"
                    label="Address 1"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <TextField
                    className="mb-4"
                    label="Address 2"
                    variant="outlined"
                    size="small"
                    fullWidth
                />

                <div className="flex mb-4">
                    <TextField
                        className="mr-2"
                        label="City"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        className="ml-2"
                        label="State/Province"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </div>

                <div className="flex mb-4">
                    <TextField
                        className="mr-2"
                        label="Zip"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        className="ml-2"
                        label="Country"
                        variant="outlined"
                        size="small"
                        fullWidth
                        defaultValue=""
                        select
                    >
                        {countries.map((country) => (
                            <MenuItem key={country.name} value={country.name}>
                                {country.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <TextField
                    className="mb-4"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <TextField
                    className="mb-4"
                    label="Email"
                    placeholder="ui-lib@example.com"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <TextField
                    className="mb-4"
                    label="Include any listing numbers or properties of interest here"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={6}
                />

                <p className="mt-0 mb-1">
                    Have you visited the State previously
                </p>
                <FormControl component="fieldset" className="mb-4">
                    <RadioGroup name="status">
                        <FormControlLabel
                            className="h-32"
                            value="yes"
                            control={<Radio color="secondary" />}
                            label="Yes"
                        />
                        <FormControlLabel
                            className="h-32"
                            value="no"
                            control={<Radio color="secondary" />}
                            label="No"
                        />
                    </RadioGroup>
                </FormControl>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        className="mb-4"
                        id="mui-pickers-date"
                        label="When are you planing on visiting?"
                        inputVariant="outlined"
                        margin="none"
                        size="small"
                        autoOk={true}
                        format="MMM dd, yyyy"
                        fullWidth
                        value={date}
                        onChange={(date) => setDate(date)}
                    />
                </MuiPickersUtilsProvider>

                <TextField
                    className="mb-4"
                    label="How long are you planing to stay?"
                    variant="outlined"
                    size="small"
                    fullWidth
                    defaultValue=""
                    select
                >
                    {stayDurationList.map((duration) => (
                        <MenuItem key={duration} value={duration}>
                            {duration}
                        </MenuItem>
                    ))}
                </TextField>

                <p className="mt-0 mb-1">
                    Can we help you make travel arrangements?
                </p>
                <FormControl component="fieldset" className="mb-4">
                    <RadioGroup name="status">
                        <FormControlLabel
                            className="h-32"
                            value="yes"
                            control={<Radio color="secondary" />}
                            label="Yes"
                        />
                        <FormControlLabel
                            className="h-32"
                            value="no"
                            control={<Radio color="secondary" />}
                            label="No"
                        />
                    </RadioGroup>
                </FormControl>

                <p className="mt-0 mb-1">
                    What kind of property are you interested in?
                </p>
                <div className="mb-4">
                    {propertyTypeList.map((item, ind) => (
                        <FormControlLabel
                            className="block h-32"
                            control={<Checkbox />}
                            label={item}
                            key={ind}
                        />
                    ))}
                </div>

                <TextField
                    className="mb-4"
                    label="What kind of location are you interested in?"
                    variant="outlined"
                    size="small"
                    fullWidth
                    defaultValue=""
                    select
                >
                    {locationTypeList.map((location) => (
                        <MenuItem key={location} value={location}>
                            {location}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    className="mb-4"
                    label="What is your budget?"
                    variant="outlined"
                    size="small"
                    fullWidth
                    defaultValue=""
                    select
                >
                    {budgetList.map((budget) => (
                        <MenuItem key={budget} value={budget}>
                            {budget}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    className="mb-4"
                    label="Questions/Comments"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={6}
                />

                <div className="flex justify-center">
                    <Button
                        className="px-7"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </Card>
    )
}

const stayDurationList = [
    'Less than a week',
    'One week',
    'One month',
    "I'm not sure",
]

const propertyTypeList = [
    'Row Land',
    'Lot in a Development',
    'Condos',
    'Single Family Home',
    'Other',
]

const locationTypeList = [
    'Ocean View',
    'Beach Front',
    'Near Surf',
    'In Town',
    'Farm',
    'Other',
    "Doesn't Matter",
]

const budgetList = [
    '$0 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000 Plus',
]
export default PropertyListingForm
