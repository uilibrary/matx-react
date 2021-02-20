const textLight = {
    primary: 'rgba(52, 49, 76, 1)',
    secondary: 'rgba(52, 49, 76, 0.54)',
    disabled: 'rgba(52, 49, 76, 0.38)',
    hint: 'rgba(52, 49, 76, 0.38)',
}
const secondaryColor = {
    light: '#f9a352',
    main: '#ff9e43',
    dark: '#ff932e',
    contrastText: textLight.primary,
}
const errorColor = {
    main: '#FF3D57',
}

export const themeColors = {
    whitePurple: {
        palette: {
            type: 'light',
            primary: {
                main: '#ffffff',
                contrastText: textLight.primary,
            },
            secondary: {
                main: '#7467ef',
                contrastText: '#ffffff',
            },
            error: errorColor,
            text: textLight,
        },
    },
    whiteBlue: {
        palette: {
            type: 'light',
            primary: {
                main: '#ffffff',
                contrastText: textLight.primary,
            },
            secondary: {
                main: '#1976d2',
                contrastText: '#ffffff',
            },
            text: textLight,
        },
    },
    slateDark1: {
        palette: {
            type: 'dark',
            primary: {
                main: '#222A45',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#ff9e43',
                contrastText: textLight.primary,
            },
            error: errorColor,
            background: {
                paper: '#222A45',
                default: '#1a2038',
            },
        },
    },
    slateDark2: {
        palette: {
            type: 'dark',
            primary: {
                main: '#1a2038',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#ff9e43',
                contrastText: textLight.primary,
            },
            error: errorColor,
            background: {
                paper: '#222A45',
                default: '#1a2038',
            },
        },
    },
    purple1: {
        palette: {
            type: 'light',
            primary: {
                main: '#7467ef',
                contrastText: '#ffffff',
            },
            secondary: secondaryColor,
            error: errorColor,
            text: textLight,
        },
    },
    purple2: {
        palette: {
            type: 'light',
            primary: {
                main: '#6a75c9',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#ff9e43',
                contrastText: textLight.primary,
            },
            error: errorColor,
            text: textLight,
        },
    },
    purpleDark1: {
        palette: {
            type: 'dark',
            primary: {
                main: '#7467ef',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#ff9e43',
                contrastText: textLight.primary,
            },
            error: errorColor,
            background: {
                paper: '#222A45',
                default: '#1a2038',
            },
        },
    },
    purpleDark2: {
        palette: {
            type: 'dark',
            primary: {
                main: '#6a75c9',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#ff9e43',
                contrastText: textLight.primary,
            },
            error: errorColor,
            background: {
                paper: '#222A45',
                default: '#1a2038',
            },
        },
    },
    blue: {
        palette: {
            type: 'light',
            primary: {
                main: '#1976d2',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#FFAF38',
                contrastText: textLight.primary,
            },
            error: errorColor,
            text: textLight,
        },
    },
    blueDark: {
        palette: {
            type: 'dark',
            primary: {
                main: '#1976d2',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#FF4F30',
                contrastText: textLight.primary,
            },
            error: errorColor,
            background: {
                paper: '#222A45',
                default: '#1a2038',
            },
        },
    },
    red: {
        palette: {
            type: 'dark',
            primary: {
                main: '#e53935',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#FFAF38',
                contrastText: textLight.primary,
            },
            error: errorColor,
        },
    },
}
