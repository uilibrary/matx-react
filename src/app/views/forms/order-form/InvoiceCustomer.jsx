import React from 'react'
import { Divider, Card, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    avatar: {
        border: '4px solid rgba(var(--body), 0.03)',
        boxShadow: theme.shadows[3],
    },
}))

const InvoiceCustomer = () => {
    const classes = useStyles()

    return (
        <Card className="p-4">
            <div className="mb-4 flex justify-between items-center">
                <h4 className="m-0 font-medium">Customer</h4>
                <Link className="text-primary" to="/">
                    View Details
                </Link>
            </div>

            <Divider className="mb-6" />

            <div className="flex-column justify-center items-center mb-6">
                <Avatar
                    className={clsx('w-100 h-100 mb-6', classes.avatar)}
                    src="/assets/images/faces/5.jpg"
                />
                <h5>Devid Templehov</h5>
                <p className="text-primary mt-0 mb-2">
                    davidtempletone@gmail.com
                </p>
                <p className="mt-0">+21 (050) 071-91-58</p>
                <Rating readOnly={true} value={4} />
            </div>

            <Divider className="mb-6" />

            <div className="mb-6">
                <p className="font-medium mb-3">Shipping Address</p>
                <p className="mt-0 mb-1">39, Hilbert Store</p>
                <p className="m-0">New York, NY, United States</p>
            </div>

            <div>
                <p className="font-medium mb-3">Billing Address</p>
                <p className="mt-0 mb-1">39, Hilbert Store</p>
                <p className="m-0">New York, NY, United States</p>
            </div>
        </Card>
    )
}

export default InvoiceCustomer
