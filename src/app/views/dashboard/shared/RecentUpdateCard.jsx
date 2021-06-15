import React, { Fragment } from 'react'
import { format } from 'date-fns'
import clsx from 'clsx'
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from '@material-ui/lab'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    root: {
        '&:before': {
            display: 'none !important',
        },
    },
}))

const RecentUpdateCard = ({ notification, isFirstIndex, isLastIndex }) => {
    const classes = useStyles()

    return (
        <Fragment>
            <TimelineItem
                classes={{
                    root: classes.root,
                }}
            >
                <TimelineSeparator>
                    <TimelineDot
                        color="primary"
                        variant={
                            isFirstIndex || isLastIndex ? 'default' : 'outlined'
                        }
                    />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <p className="mt-0 mb-5 text-muted uppercase">
                        {format(
                            new Date(notification.timestamp),
                            'dd MMM, yyyy'
                        )}
                    </p>
                    <h4 className="mt-0 mb-4">{notification.title}</h4>
                    <p
                        className={clsx({
                            'm-0': true,
                            'pb-8': !isLastIndex,
                        })}
                    >
                        {notification.subtitle}
                    </p>
                </TimelineContent>
            </TimelineItem>
        </Fragment>
    )
}

export default RecentUpdateCard
