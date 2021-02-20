import React, { Fragment, useState } from 'react'
import {
    Icon,
    IconButton,
    Button,
    // FormGroup,
    // Switch,
    // FormControlLabel,
    // FormControl,
    // FormLabel,
    Card,
    Tooltip,
    Drawer,
    Link,
} from '@material-ui/core'
import Scrollbar from 'react-perfect-scrollbar'
// import Layout1Customizer from "./Layout1Customizer";
// import Layout2Customizer from "./Layout2Customizer";
// import { themeColors } from "../../MatxTheme/themeColors";
import BadgeSelected from './BadgeSelected'
// import { mainThemes, topbarThemes } from "./customizerOptions";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import clsx from 'clsx'

import useSettings from 'app/hooks/useSettings'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    label: {
        color: palette.secondary.main,
        backgroundColor: palette.primary.dark,
        fontWeight: 700,
        transform: 'rotate(90deg)',
        marginBottom: '2.5rem',
        padding: '.25rem .5rem',
        borderRadius: '4px',
        cursor: 'pointer',
        letterSpacing: '1.5px',
        fontSize: '1rem',
        '&:hover, &.open': {
            backgroundColor: palette.secondary.main,
            color: palette.secondary.contrastText,
        },
    },
    helpText: {
        margin: '0px .5rem 1rem',
    },
    maxCustomizer: {
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 50,
    },
    customizerCloseButton: {
        position: 'absolute',
        right: 8,
        top: 8,
    },
    layoutBox: {
        '&:hover': {
            '& .layout-name': {
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                background: 'rgba(0,0,0,0.3)',
                zIndex: 12,
            },
        },
    },
}))

const MatxCustomizer = (props) => {
    const [open, setOpen] = useState(false)
    const [tabIndex, setTabIndex] = useState(0)

    const classes = useStyles()
    const { settings, updateSettings } = useSettings()

    // const handleChange = (name, value) => {
    //   let updatedSettings = set(settings, name, value);

    //   updateSettings(updatedSettings);
    // };

    // const handleControlChange = (name) => (event) => {
    //   let controlValue =
    //     event.target.type === "checkbox"
    //       ? event.target.checked
    //       : event.target.value;
    //   handleChange(name, controlValue);
    // };

    const tooglePanel = () => {
        setOpen(!open)
    }
    const handleTabChange = (index) => {
        setTabIndex(index)
    }

    let activeTheme = { ...settings.themes[settings.activeTheme] }

    return (
        <Fragment>
            <Tooltip title="Theme Settings" placement="left">
                <span
                    className={clsx({ [classes.label]: true, open })}
                    onClick={tooglePanel}
                >
                    DEMOS
                </span>
            </Tooltip>

            {/* {open && ( */}
            <ThemeProvider theme={activeTheme}>
                <Drawer
                    anchor={'right'}
                    open={open}
                    variant="temporary"
                    onClose={tooglePanel}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <div
                        className={clsx(
                            'flex-column w-320 pb-8 elevation-z12 h-full-screen bg-default',
                            classes.maxCustomizer
                        )}
                    >
                        <div className="flex items-center px-5 py-4 mb-4 min-h-64 elevation-z6">
                            <Icon color="primary">settings</Icon>
                            <h5 className="mb-0 ml-2">Theme Settings</h5>
                            <IconButton
                                onClick={tooglePanel}
                                className={classes.customizerCloseButton}
                            >
                                <Icon>close</Icon>
                            </IconButton>
                        </div>
                        <div className="px-6 mb-4 flex">
                            <Button
                                variant="outlined"
                                color={tabIndex === 0 ? 'secondary' : 'primary'}
                                onClick={() => handleTabChange(0)}
                                className="mr-4"
                            >
                                Demos
                            </Button>
                            <Button
                                variant="outlined"
                                color={tabIndex === 1 ? 'secondary' : 'primary'}
                                onClick={() => handleTabChange(1)}
                            >
                                Settings
                            </Button>
                        </div>

                        <Scrollbar
                            options={{ suppressScrollX: true }}
                            className="px-4"
                        >
                            {tabIndex === 0 && (
                                <div className="mb-8 mx-2">
                                    <div className="text-muted">Layouts</div>

                                    <div className="flex-column">
                                        {demoLayouts.map((layout) => (
                                            <BadgeSelected
                                                color="secondary"
                                                className={clsx(
                                                    'w-full my-3 max-h-152 cursor-pointer',
                                                    classes.layoutBox
                                                )}
                                                badgeContent={'Pro'}
                                                invisible={!layout.isPro}
                                                key={layout.name}
                                            >
                                                <Card
                                                    className="relative"
                                                    onClick={() =>
                                                        updateSettings(
                                                            layout.options
                                                        )
                                                    }
                                                    elevation={4}
                                                >
                                                    <div className="layout-name hidden">
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                        >
                                                            {layout.name}
                                                        </Button>
                                                    </div>

                                                    <img
                                                        className="w-full"
                                                        src={layout.thumbnail}
                                                        alt={layout.name}
                                                    />
                                                </Card>
                                            </BadgeSelected>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* END LAYOUT */}

                            {tabIndex === 1 && (
                                <div>
                                    <div className={classes.helpText}>
                                        We used React context API to control
                                        layout. Check out the{' '}
                                        <Link
                                            href="http://demos.ui-lib.com/matx-react-doc/layout.html"
                                            target="_blank"
                                        >
                                            Documentation
                                        </Link>
                                    </div>
                                    {/* <div className="mb-4 mx-2">
                    <div className="text-muted mb-4">Main theme</div>
                    <div className="flex flex-wrap m--2">
                      {mainThemes.map((color, i) => (
                        <Tooltip key={i} title={color} placement="top">
                          <div
                            className="flex justify-center items-center h-40 w-40 border-radius-4 m-2 cursor-pointer elevation-z3"
                            onClick={() =>
                              updateSettings({ activeTheme: color })
                            }
                            style={{
                              backgroundColor:
                                themeColors[color].palette.primary.main,
                            }}
                          >
                            {settings.activeTheme === color && (
                              <Icon>done</Icon>
                            )}
                            <div
                              className={settings.themes[color].palette.type}
                            ></div>
                          </div>
                        </Tooltip>
                      ))}
                    </div>
                  </div> */}

                                    {/* {settings.activeLayout === "layout1" && (
                    <Layout1Customizer
                      settings={settings}
                      handleChange={handleChange}
                      handleControlChange={handleControlChange}
                    />
                  )}

                  {settings.activeLayout === "layout2" && (
                    <Layout2Customizer
                      settings={settings}
                      handleChange={handleChange}
                      handleControlChange={handleControlChange}
                    />
                  )} */}

                                    {/* <div className="mx-2 mb-6">
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Footer</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={get(settings.footer, "show")}
                              onChange={handleControlChange("footer.show")}
                            />
                          }
                          label="Show"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              checked={get(
                                settings.layout1Settings.footer,
                                "fixed"
                              )}
                              onChange={handleControlChange("footer.fixed")}
                            />
                          }
                          label="Fixed"
                        />
                      </FormGroup>
                    </FormControl>
                  </div> */}

                                    {/* <div className="mx-2 mb-6">
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Secondary sidebar
                      </FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={get(settings.secondarySidebar, "show")}
                              onChange={handleControlChange(
                                "secondarySidebar.show"
                              )}
                            />
                          }
                          label="Show"
                        />
                      </FormGroup>
                    </FormControl>
                  </div> */}

                                    {/* <div className="mb-4 mx-2">
                    <div className="text-muted mb-4">
                      Secondary sidebar theme
                    </div>
                    <div className="flex flex-wrap m--2">
                      {topbarThemes.map((color, i) => (
                        <Tooltip key={i} title={color} placement="top">
                          <div
                            className="flex justify-center items-center h-40 w-40 border-radius-4 m-2 cursor-pointer elevation-z3"
                            onClick={() =>
                              handleChange("secondarySidebar.theme", color)
                            }
                            style={{
                              backgroundColor:
                                themeColors[color].palette.primary.main,
                            }}
                          >
                            {settings.secondarySidebar.theme === color && (
                              <Icon>done</Icon>
                            )}
                            <div
                              className={settings.themes[color].palette.type}
                            ></div>
                          </div>
                        </Tooltip>
                      ))}
                    </div>
                  </div> */}

                                    {/* <div className="mb-4 mx-2">
                    <div className="text-muted mb-4">Footer theme</div>
                    <div className="flex flex-wrap m--2">
                      {topbarThemes.map((color, i) => (
                        <Tooltip key={i} title={color} placement="top">
                          <div
                            className="flex justify-center items-center h-40 w-40 border-radius-4 m-2 cursor-pointer elevation-z3"
                            onClick={() => handleChange("footer.theme", color)}
                            style={{
                              backgroundColor:
                                themeColors[color].palette.primary.main,
                            }}
                          >
                            {settings.footer.theme === color && (
                              <Icon>done</Icon>
                            )}
                            <div
                              className={settings.themes[color].palette.type}
                            ></div>
                          </div>
                        </Tooltip>
                      ))}
                    </div>
                  </div> */}
                                </div>
                            )}
                        </Scrollbar>
                    </div>
                </Drawer>
            </ThemeProvider>
            {/* )} */}
        </Fragment>
    )
}

const demoLayouts = [
    {
        name: 'Light Sidebar',
        thumbnail: '/assets/images/screenshots/layout1-customizer.png',
        isPro: false,
        options: {
            activeLayout: 'layout1',
            activeTheme: 'blue',
            layout1Settings: {
                leftSidebar: {
                    mode: 'full',
                    theme: 'whiteBlue',
                    bgOpacity: 0.98,
                },
                topbar: {
                    theme: 'blueDark',
                    fixed: true,
                },
            },
            footer: {
                theme: 'slateDark1',
            },
        },
    },
    {
        name: 'Compact Sidebar',
        thumbnail: '/assets/images/screenshots/layout5-customizer.png',
        isPro: false,
        options: {
            activeLayout: 'layout1',
            activeTheme: 'blue',
            layout1Settings: {
                leftSidebar: {
                    mode: 'compact',
                    theme: 'slateDark1',
                    bgOpacity: 0.92,
                },
                topbar: {
                    theme: 'whiteBlue',
                    fixed: true,
                },
            },
        },
    },
    {
        name: 'Dark Sidebar',
        thumbnail: '/assets/images/screenshots/layout1-blue-customizer.png',
        isPro: false,
        options: {
            activeLayout: 'layout1',
            activeTheme: 'blue',
            layout1Settings: {
                leftSidebar: {
                    mode: 'full',
                    theme: 'slateDark1',
                    bgOpacity: 0.92,
                },
                topbar: {
                    theme: 'blueDark',
                    fixed: true,
                },
            },
        },
    },
    {
        name: 'Dark Theme',
        thumbnail: '/assets/images/screenshots/layout3-customizer.png',
        isPro: false,
        options: {
            activeLayout: 'layout1',
            activeTheme: 'purpleDark1',
            layout1Settings: {
                leftSidebar: {
                    mode: 'full',
                    theme: 'slateDark1',
                    bgOpacity: 0.92,
                },
                topbar: {
                    theme: 'purpleDark1',
                    fixed: true,
                },
            },
            footer: {
                theme: 'slateDark1',
            },
        },
    },
    {
        name: 'Horizontal Navigation',
        thumbnail: '/assets/images/screenshots/layout4-customizer.png',
        isPro: true,
        options: {
            activeLayout: 'layout2',
            activeTheme: 'purple1',
            layout2Settings: {
                mode: 'full',
            },
            footer: {
                theme: 'slateDark1',
            },
        },
    },
]

export default MatxCustomizer
