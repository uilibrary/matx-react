import React from 'react'
import { MatxHorizontalNav } from 'app/components'
import { navigations } from '../../../navigations'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    root: {
        '&, & .horizontal-nav ul ul': {
            background: palette.primary.main,
        },
        '& .horizontal-nav a, & .horizontal-nav label': {
            color: palette.primary.contrastText,
        },
        '& .horizontal-nav ul li ul li:hover, & .horizontal-nav ul li ul li.open': {
            background: palette.primary.dark,
        },
    },
}))

const Layout2Navbar = () => {
    const classes = useStyles()

    return (
        <div className={clsx('navbar', classes.root)}>
            <div className="pl-6">
                <MatxHorizontalNav navigation={navigations} max={6} />
            </div>
        </div>
    )
}

export default Layout2Navbar
