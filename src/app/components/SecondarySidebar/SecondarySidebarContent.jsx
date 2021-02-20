import React from 'react'
import { IconButton, Icon } from '@material-ui/core'
import MatxCustomizer from '../MatxCustomizer/MatxCustomizer'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { ChatHead } from 'app/components'
import { Chatbox } from 'app/components'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    root: {
        position: 'fixed',
        height: '100vh',
        width: (props) => props.width,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: theme.shadows[8],
        backgroundColor: palette.primary.main,
        zIndex: 98,
        transition: 'all 0.15s ease',
    },
    '@global': {
        '@media screen and (min-width: 767px)': {
            '.content-wrap, .layout2.layout-contained, .layout2.layout-full': {
                marginRight: (props) => props.width,
            },
            '.matx-customizer': {
                right: (props) => props.width,
            },
        },
        '@media screen and (max-width: 959px)': {
            '.toolbar-menu-wrap .menu-area': {
                width: (props) => `calc(100% - ${props.width})`,
            },
        },
    },
}))

const SecondarySidebarContent = () => {
    const classes = useStyles({ width: '50px' })

    return (
        <div className={clsx('secondary-sidebar', classes.root)}>
            <span className="m-auto"></span>

            <MatxCustomizer />

            <ShoppingCart />

            <ChatHead
                icon={
                    <IconButton className="my-3" size="small">
                        <Icon>comments</Icon>
                    </IconButton>
                }
            >
                <Chatbox />
            </ChatHead>

            <span className="m-auto"></span>
        </div>
    )
}

export default SecondarySidebarContent
