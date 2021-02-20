import React from 'react'
import { getTimeDifference } from 'utils'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    circle: {
        position: 'absolute',
        height: 16,
        width: 16,
        borderRadius: '50%',
        boxShadow: theme.shadows[3],
        left: 18,
        top: 23,
    },
    verticalLine: {
        position: 'absolute',
        left: 25,
        width: 2,
        background: 'rgba(var(--body), 0.1)',
    },
    upperLine: {
        top: 0,
        height: 23,
    },
    lowerLine: {
        position: 'absolute',
        top: 40,
        left: 25,
        bottom: 0,
    },
    lightBG: {
        background: 'rgba(var(--body),0.03)',
        borderRadius: 4,
    },
    icon: {},
}))

const NotificationCard = ({ notification, isFirstIndex, isLastIndex }) => {
    const classes = useStyles()
    // console.log(notification);
    return (
        <div className="relative">
            <div className="pl-12 pr-8 py-6">
                {!isFirstIndex && (
                    <div
                        className={clsx(
                            classes.upperLine,
                            classes.verticalLine
                        )}
                    ></div>
                )}
                <div
                    className={clsx(
                        'flex items-center justify-center',
                        classes.circle
                    )}
                >
                    <div className="p-1 bg-primary rounded"></div>
                </div>
                {!isLastIndex && (
                    <div
                        className={clsx(
                            classes.lowerLine,
                            classes.verticalLine
                        )}
                    ></div>
                )}
                <div className="flex justify-between">
                    <div className="text-13">
                        <h5 className="mt-0 mb-1 text-14">
                            {notification.title}
                        </h5>
                        <span className="text-muted">on</span>
                        <Link className="ml-1 text-primary font-medium" to="/">
                            Project Name
                        </Link>
                    </div>
                    <small className="text-muted">
                        {getTimeDifference(new Date(notification.timestamp))}{' '}
                        ago
                    </small>
                </div>

                <p
                    className={clsx(
                        'my-2 py-6px px-3 text-14',
                        classes.lightBG
                    )}
                >
                    {notification.subtitle}
                </p>
            </div>

            <Divider />
        </div>
    )
}

export default NotificationCard
