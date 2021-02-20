import React, { Fragment } from 'react'
import Menu from '@material-ui/core/Menu'
import { ThemeProvider, makeStyles } from '@material-ui/styles'
import useSettings from 'app/hooks/useSettings'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    menuButton: {
        display: 'inline-block',
        color: palette.text.primary,
        '& div:hover': {
            backgroundColor: palette.action.hover,
        },
    },
}))

const MatxMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const children = React.Children.toArray(props.children)
    let { shouldCloseOnItemClick = true, horizontalPosition = 'left' } = props
    const { settings } = useSettings()
    const classes = useStyles()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Fragment>
            <div className={classes.menuButton} onClick={handleClick}>
                {props.menuButton}
            </div>
            <ThemeProvider theme={settings.themes[settings.activeTheme]}>
                <Menu
                    elevation={8}
                    getContentAnchorEl={null}
                    anchorEl={anchorEl}
                    open={!!anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: horizontalPosition,
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: horizontalPosition,
                    }}
                >
                    {children.map((child, index) => (
                        <div
                            onClick={
                                shouldCloseOnItemClick ? handleClose : () => {}
                            }
                            key={index}
                        >
                            {child}
                        </div>
                    ))}
                </Menu>
            </ThemeProvider>
        </Fragment>
    )
}

export default MatxMenu
