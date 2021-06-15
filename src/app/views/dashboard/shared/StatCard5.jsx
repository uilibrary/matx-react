import React from 'react'
import { Grid, Card, IconButton, Icon } from '@material-ui/core'

const StatCard5 = () => {
    const statList = [
        {
            icon: 'card_giftcard',
            amount: 10495,
            title: 'TO BE PACKED',
        },
        {
            icon: 'local_shipping',
            amount: 30942,
            title: 'TO BE SHIPPED',
        },
        {
            icon: 'assignment_turned_in',
            amount: 45269,
            title: 'TO BE DELIVERED',
        },
        {
            icon: 'assignment',
            amount: 20965,
            title: 'TO BE INVOICED',
        },
    ]

    return (
        <div>
            <Grid container spacing={3}>
                {statList.map((item, ind) => (
                    <Grid key={item.title} item md={3} sm={6} xs={12}>
                        <Card
                            elevation={3}
                            className="p-5 flex-column justify-center items-center"
                        >
                            <div>
                                <IconButton
                                    size="small"
                                    className="p-2 bg-light-gray"
                                >
                                    <Icon className="text-muted">
                                        {item.icon}
                                    </Icon>
                                </IconButton>
                            </div>
                            {/* <div> */}
                            <h3 className="mt-1 text-32">
                                {item.amount.toLocaleString()}
                            </h3>
                            <p className="m-0 text-muted">{item.title}</p>
                            {/* </div> */}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default StatCard5
