import React from 'react'
import {
    Grid,
    Divider,
    Card,
    TextField,
    Icon,
    Button,
    IconButton,
} from '@material-ui/core'
import { format } from 'date-fns'

const InvoiceOverview = () => {
    return (
        <Card className="p-4">
            <div className="mb-4 flex justify-between items-center">
                <h4 className="m-0 font-medium">Overview</h4>
                <div className="text-muted text-13 font-medium">
                    {format(new Date(), 'MMM dd, yyyy')} at{' '}
                    {format(new Date(), 'HH:mm:aa')}
                </div>
            </div>

            <Divider className="mb-6" />

            <div className="flex mb-6">
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search products..."
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <Icon className="mr-3" fontSize="small">
                                search
                            </Icon>
                        ),
                    }}
                />
                <Button className="ml-3 px-7 font-medium text-primary bg-light-primary whitespace-pre">
                    Browse Catalog
                </Button>
            </div>

            <div className="overflow-auto">
                <div className="min-w-600">
                    <div className="py-3">
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <h6 className="m-0 font-medium">
                                    Product Details
                                </h6>
                            </Grid>
                            <Grid
                                item
                                lg={2}
                                md={2}
                                sm={2}
                                xs={2}
                                className="text-center"
                            >
                                <h6 className="m-0 font-medium">Price</h6>
                            </Grid>
                            <Grid
                                item
                                lg={2}
                                md={2}
                                sm={2}
                                xs={2}
                                className="text-center"
                            >
                                <h6 className="m-0 font-medium">Quantity</h6>
                            </Grid>
                            <Grid
                                item
                                lg={2}
                                md={2}
                                sm={2}
                                xs={2}
                                className="text-center"
                            >
                                <h6 className="m-0 font-medium">Total</h6>
                            </Grid>
                        </Grid>
                    </div>

                    <Divider />

                    {dummyProductList.map((product) => (
                        <div key={product.id} className="py-4">
                            <Grid container alignItems="center">
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <div className="flex">
                                        <img
                                            className="border-radius-4 w-100 mr-3"
                                            src={product.imgUrl}
                                            alt={product.title}
                                        />
                                        <div className="flex-grow">
                                            <h6 className="mt-0 mb-3 text-15 text-primary">
                                                {product.title}
                                            </h6>
                                            <p className="mt-0 mb-6px text-13">
                                                <span className="text-muted">
                                                    category:{' '}
                                                </span>
                                                <span className="font-medium">
                                                    {product.item}
                                                </span>
                                            </p>
                                            <p className="mt-0 mb-6px text-13">
                                                <span className="text-muted">
                                                    brand:{' '}
                                                </span>
                                                <span className="font-medium">
                                                    {product.brand}
                                                </span>
                                            </p>
                                            <p className="mt-0 mb-6px text-13">
                                                <span className="text-muted">
                                                    category:{' '}
                                                </span>
                                                <span className="font-medium">
                                                    {product.category}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    lg={2}
                                    md={2}
                                    sm={2}
                                    xs={2}
                                    className="text-center"
                                >
                                    <TextField
                                        variant="outlined"
                                        name="amount"
                                        type="number"
                                        size="small"
                                        defaultValue={product.price}
                                        inputProps={{
                                            style: {
                                                width: '60px',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={2}
                                    md={2}
                                    sm={2}
                                    xs={2}
                                    className="text-center"
                                >
                                    <TextField
                                        variant="outlined"
                                        name="amount"
                                        type="number"
                                        size="small"
                                        defaultValue={product.amount}
                                        inputProps={{
                                            style: {
                                                width: '60px',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={2}
                                    md={2}
                                    sm={2}
                                    xs={2}
                                    className="text-center"
                                >
                                    <div className="flex justify-end items-center">
                                        <h6 className="m-0">
                                            ${product.price * product.amount}
                                        </h6>
                                        <IconButton>
                                            <Icon fontSize="small">clear</Icon>
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </div>
            </div>

            <Divider className="mt-4 mb-6" />

            <Grid container spacing={3}>
                <Grid item md={7} xs={12}>
                    <h5 className="mt-0 mb-6">Notes</h5>
                    <TextField
                        placeholder="Write a note"
                        variant="outlined"
                        multiline
                        rows={6}
                        fullWidth
                    />
                    <div className="mt-4 flex justify-end">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                        >
                            Add a note
                        </Button>
                    </div>
                </Grid>
                <Grid item md={5} xs={12}>
                    <h5 className="mt-0 mb-6">Bill Details</h5>
                    <div className="flex justify-between mb-3">
                        <span className="text-muted">Subtotal:</span>
                        <span className="font-medium">$568</span>
                    </div>

                    <p className="text-primary text-13 font-medium mt-0 mb-1">
                        Shipping
                    </p>
                    <div className="flex justify-between mb-3">
                        <div>
                            <p className="m-0">DHL</p>
                            <small className="text-muted">
                                Deliver in 1-3 days
                            </small>
                        </div>
                        <span className="font-medium">$15.00</span>
                    </div>

                    <p className="text-primary text-13 font-medium mt-0 mb-1">
                        Taxes
                    </p>
                    <div className="flex justify-between mb-2">
                        <p className="m-0">GST 5%</p>
                        <span className="font-medium">$150.00</span>
                    </div>
                </Grid>
            </Grid>
        </Card>
    )
}

const dummyProductList = [
    {
        id: '323sa680b32497dsfdsgga21rt47',
        imgUrl: '/assets/images/products/speaker-1.jpg',
        price: 324.0,
        amount: 10,
        title: 'Bass Speaker Black',
        category: 'audio',
        brand: 'Microlab',
        item: '2019 6582 2365',
    },
    {
        id: '323sa680b324976dfgga21rt47',
        imgUrl: '/assets/images/products/speaker-2.jpg',
        price: 454.0,
        amount: 15,
        title: 'Bass Speaker',
        category: 'audio',
        brand: 'Microlab',
        item: '2019 6582 2365',
    },
]

export default InvoiceOverview
