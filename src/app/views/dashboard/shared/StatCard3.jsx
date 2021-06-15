import React from 'react'
import { Grid, Card, IconButton, Icon } from '@material-ui/core'

const StatCard3 = () => {
    const statList = [
        {
            icon: 'people',
            amount: 10495,
            title: 'New Members',
        },
        {
            icon: 'location_on_outlined',
            amount: 30942,
            title: 'Places added',
        },
        {
            icon: 'keyboard_voice',
            amount: 45269,
            title: 'Support Members',
        },
        {
            icon: 'card_giftcard',
            amount: 20965,
            title: 'Tags Used',
        },
    ]

    return (
        <div>
            <Grid container spacing={3}>
                {statList.map((item, ind) => (
                    <Grid key={item.title} item md={3} sm={6} xs={12}>
                        <Card elevation={3} className="p-5 flex">
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
                            <div className="ml-4">
                                <h3 className="mt-1 text-32">
                                    {item.amount.toLocaleString()}
                                </h3>
                                <p className="m-0 text-muted">{item.title}</p>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default StatCard3
