import React from 'react'
import { IconButton, Icon, Button, Grid } from '@material-ui/core'
import InvoiceOverview from './InvoiceOverview'
import InvoiceCustomer from './InvoiceCustomer'

const Invoice2 = () => {
    return (
        <div className="m-sm-30">
            <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <h3 className="mt-0 mb-4 font-medium text-28">
                        Order #1028
                    </h3>
                    <div className="flex">
                        <div className="px-3 text-11 py-3px border-radius-4 text-white bg-green mr-3">
                            Paid
                        </div>
                        <div className="px-3 text-11 py-3px border-radius-4 text-white bg-secondary">
                            Unfulfilled
                        </div>
                    </div>
                </div>

                <div className="">
                    <IconButton className="mr-2">
                        <Icon>more_horiz</Icon>
                    </IconButton>
                    <Button variant="contained" color="primary">
                        Fulfill Order
                    </Button>
                </div>
            </div>

            <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                    <InvoiceOverview />
                </Grid>
                <Grid item md={4} xs={12}>
                    <InvoiceCustomer />
                </Grid>
            </Grid>
        </div>
    )
}

export default Invoice2
