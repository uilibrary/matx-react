import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Icon, Button, IconButton, Fab } from '@material-ui/core'
import { Breadcrumb, SimpleCard } from 'app/components'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

export default function AppButton() {
    const classes = useStyles()

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Buttons' },
                    ]}
                />
            </div>
            <SimpleCard title="contained buttons">
                <Button variant="contained" className={classes.button}>
                    Default
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Primary
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                >
                    Secondary
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled
                    className={classes.button}
                >
                    Disabled
                </Button>
                <Button
                    variant="contained"
                    href="#contained-buttons"
                    className={classes.button}
                >
                    Link
                </Button>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button
                        variant="contained"
                        component="span"
                        className={classes.button}
                    >
                        Upload
                    </Button>
                </label>
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="text buttons">
                <Button className={classes.button}>Default</Button>
                <Button color="primary" className={classes.button}>
                    Primary
                </Button>
                <Button color="secondary" className={classes.button}>
                    Secondary
                </Button>
                <Button disabled className={classes.button}>
                    Disabled
                </Button>
                <Button href="#text-buttons" className={classes.button}>
                    Link
                </Button>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="text-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="text-button-file">
                    <Button component="span" className={classes.button}>
                        Upload
                    </Button>
                </label>
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="outlined buttons">
                <Button variant="outlined" className={classes.button}>
                    Default
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                >
                    Primary
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                >
                    Secondary
                </Button>
                <Button variant="outlined" disabled className={classes.button}>
                    Disabled
                </Button>
                <Button
                    variant="outlined"
                    href="#outlined-buttons"
                    className={classes.button}
                >
                    Link
                </Button>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="outlined-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="outlined-button-file">
                    <Button
                        variant="outlined"
                        component="span"
                        className={classes.button}
                    >
                        Upload
                    </Button>
                </label>
                <Button
                    variant="outlined"
                    color="inherit"
                    className={classes.button}
                >
                    Inherit
                </Button>
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="icon buttons">
                <IconButton className={classes.button} aria-label="Delete">
                    <Icon>delete</Icon>
                </IconButton>
                <IconButton
                    className={classes.button}
                    aria-label="Delete"
                    disabled
                    color="primary"
                >
                    <Icon>delete</Icon>
                </IconButton>
                <IconButton
                    color="secondary"
                    className={classes.button}
                    aria-label="Add an alarm"
                >
                    <Icon>alarm</Icon>
                </IconButton>
                <IconButton
                    color="primary"
                    className={classes.button}
                    aria-label="Add to shopping cart"
                >
                    <Icon>add_shopping_cart</Icon>
                </IconButton>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                />
                <label htmlFor="icon-button-file">
                    <IconButton
                        color="primary"
                        className={classes.button}
                        aria-label="Upload picture"
                        component="span"
                    >
                        <Icon>photo_camera</Icon>
                    </IconButton>
                </label>
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="different size buttons">
                <Fab
                    size="small"
                    color="secondary"
                    aria-label="Add"
                    className={classes.button}
                >
                    <Icon>add</Icon>
                </Fab>
                <Fab
                    size="medium"
                    color="secondary"
                    aria-label="Add"
                    className={classes.button}
                >
                    <Icon>add</Icon>
                </Fab>
                <Fab
                    color="secondary"
                    aria-label="Add"
                    className={classes.button}
                >
                    <Icon>add</Icon>
                </Fab>
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="outlined buttons">
                <Fab
                    color="primary"
                    aria-label="Add"
                    className={classes.button}
                >
                    <Icon>add</Icon>
                </Fab>
                <Fab
                    color="secondary"
                    aria-label="Edit"
                    className={classes.button}
                >
                    <Icon>edit_icon</Icon>
                </Fab>
                <Fab
                    variant="extended"
                    aria-label="Delete"
                    className={classes.button}
                >
                    <Icon className="mr-8">navigation</Icon>
                    Extended
                </Fab>
                <Fab disabled aria-label="Delete" className={classes.button}>
                    <Icon>delete</Icon>
                </Fab>
            </SimpleCard>
        </div>
    )
}
