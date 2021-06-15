import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Grid } from '@material-ui/core'

const Color = () => {
    const bgClassList = [
        {
            bgClass: 'bg-primary',
            textClass: 'text-white',
        },
        {
            bgClass: 'bg-secondary',
            textClass: 'text-white',
        },
        {
            bgClass: 'bg-green',
            textClass: 'text-white',
        },
        {
            bgClass: 'bg-error',
            textClass: 'text-white',
        },
        {
            bgClass: 'bg-dark',
            textClass: 'text-white',
        },
        {
            bgClass: 'bg-light-dark',
            textClass: 'text-white',
        },
        {
            bgClass: 'bg-light-green',
        },
        {
            bgClass: 'bg-light-error',
        },
        {
            bgClass: 'bg-light-primary',
        },
        {
            bgClass: 'bg-light-gray',
        },
        {
            bgClass: 'bg-default',
        },
        {
            bgClass: 'bg-paper',
        },
        {
            bgClass: 'bg-white',
        },
    ]

    const textClassList = [
        {
            textClass: 'text-brand',
        },
        {
            textClass: 'text-primary',
        },
        {
            textClass: 'text-secondary',
        },
        {
            textClass: 'text-green',
        },
        {
            textClass: 'text-error',
        },
        {
            textClass: 'text-gray',
        },
        {
            textClass: 'text-muted',
        },
        {
            textClass: 'text-light-white',
            bgClass: 'bg-secondary',
        },
        {
            textClass: 'text-muted-white',
            bgClass: 'bg-secondary  ',
        },
        {
            textClass: 'text-white',
            bgClass: 'bg-primary',
        },
    ]

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Utilities', path: '/utilities' },
                        { name: 'Color' },
                    ]}
                />
            </div>
            <SimpleCard title="Background Color Class">
                <Grid container spacing={3}>
                    {bgClassList.map((bg, ind) => (
                        <Grid item key={ind}>
                            <div
                                className={`h-132 w-132 border-radius-8 elevation-z6 ${bg.bgClass} flex justify-center items-center`}
                            >
                                <span className={`${bg.textClass}`}>
                                    .{bg.bgClass}
                                </span>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Text Color Class">
                <Grid container spacing={3}>
                    {textClassList.map((bg, ind) => (
                        <Grid item key={ind}>
                            <div
                                className={`h-132 w-132 border-radius-8 elevation-z6 ${bg.bgClass} flex justify-center items-center`}
                            >
                                <span className={`${bg.textClass}`}>
                                    .{bg.textClass}
                                </span>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </SimpleCard>
        </div>
    )
}

export default Color
