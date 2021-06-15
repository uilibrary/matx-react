import React, { Fragment } from 'react'
import StatCard5 from './StatCard5'
import TopSellingTable from './TopSellingTable'
import InventoryLineChart from './InventoryLineChart'
import { Card, Divider, Grid, MenuItem, Select } from '@material-ui/core'
import InventoryDoughnutChart from './InventoryDoughnutChart'

const InventoryDashboard = () => {
    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <h5 className="mt-0 mb-4 text-muted">Sales Activity</h5>
                    <StatCard5 />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <div className="flex-column h-full">
                        <h5 className="mt-0 mb-4 text-muted">
                            Inventory Summary
                        </h5>
                        <Card
                            className="p-5 flex justify-between items-center mb-4 h-full"
                            elevation={3}
                        >
                            <span>QUANTITY IN HAND</span>
                            <h5 className="m-0">540</h5>
                        </Card>

                        <Card
                            className="p-5 flex justify-between items-center h-full"
                            elevation={3}
                        >
                            <span>QUANTITY TO BE RECEIVED</span>
                            <h5 className="m-0">120</h5>
                        </Card>
                    </div>
                </Grid>

                <Grid item sm={6} xs={12}>
                    <Card className="px-6 py-4">
                        <Grid container spacing={3} alignItems="center">
                            <Grid item sm={7} xs={12}>
                                <div className="flex justify-between items-center py-3">
                                    <h5 className="font-normal text-error">
                                        Stockout Items
                                    </h5>
                                    <h5 className="text-error">234</h5>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <h5 className="font-normal">
                                        Low Stock Items
                                    </h5>
                                    <h5>123</h5>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <h5 className="font-normal">
                                        Available Items
                                    </h5>
                                    <h5>3432</h5>
                                </div>
                            </Grid>
                            <Grid item sm={5} xs={12}>
                                <InventoryDoughnutChart />
                            </Grid>
                        </Grid>

                        <Divider className="mt-6" />

                        <div className="flex justify-between items-center p-4">
                            <h5 className="m-0">Purchase Order</h5>
                            <Select
                                size="small"
                                defaultValue="this_year"
                                disableUnderline
                            >
                                <MenuItem value="this_year">This Year</MenuItem>
                                <MenuItem value="last_year">Last Year</MenuItem>
                            </Select>
                        </div>

                        <div className="flex justify-around">
                            <div className="py-3 text-center">
                                <p>Quantity Ordered</p>
                                <h4 className="text-primary">432</h4>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div className="py-3 text-center">
                                <p>Total Cost</p>
                                <h4 className="text-primary">
                                    ${(432432).toLocaleString()}
                                </h4>
                            </div>
                        </div>
                    </Card>
                </Grid>

                <Grid item sm={6} xs={12}>
                    <TopSellingTable />
                </Grid>
            </Grid>

            <Card className="mt-5 mb-6" elevation={3}>
                <div className="flex justify-between items-center p-4">
                    <h5 className="m-0">Sales Order Summery</h5>
                    <Select
                        size="small"
                        defaultValue="this_year"
                        disableUnderline
                    >
                        <MenuItem value="this_year">This Year</MenuItem>
                        <MenuItem value="last_year">Last Year</MenuItem>
                    </Select>
                </div>
                <InventoryLineChart />
            </Card>
        </Fragment>
    )
}

export default InventoryDashboard
