import { makeStyles } from '@material-ui/core/styles'

export const spacingStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.px-80': {
            paddingRight: '80px',
            paddingLeft: '80px',
            [theme.breakpoints.down('sm')]: {
                paddingRight: '16px',
                paddingLeft: '16px',
            },
        },
        '.px-sm-30': {
            padding: '0px 30px',
            [theme.breakpoints.down('sm')]: {
                padding: '0px 16px',
            },
        },
        '.p-sm-24': {
            padding: '24px !important',
            [theme.breakpoints.down('sm')]: {
                padding: '16px !important',
            },
        },
        '.px-sm-24': {
            padding: '0px 24px !important',
            [theme.breakpoints.down('sm')]: {
                padding: '0px 12px !important',
            },
        },
        '.pt-sm-24': {
            paddingTop: '24px !important',
            [theme.breakpoints.down('sm')]: {
                paddingTop: '16px !important',
            },
        },
        '.pl-sm-24': {
            paddingLeft: '24px !important',
            [theme.breakpoints.down('sm')]: {
                paddingLeft: '16px !important',
            },
        },
        '.m-auto': { margin: 'auto !important' },
        '.mx-auto': {
            marginLeft: 'auto !important',
            marginRight: 'auto !important',
        },
        '.my-auto': {
            marginTop: 'auto !important',
            marginBottom: 'auto !important',
        },
        '.m-sm-30': {
            margin: '30px',
            [theme.breakpoints.down('sm')]: {
                margin: '16px',
            },
        },
        '.mb-sm-30': {
            marginBottom: '30px',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '16px',
            },
        },
        '.w-full': { width: '100%' },
        '.max-w-full': { maxWidth: '100% !important' },
        '.min-w-full': { minWidth: '100% !important' },
        '.min-w-full-screen': { minWidth: '100vw !important' },
        '.w-full-screen': { width: '100vw' },
        '.min-w-600': { minWidth: '600px' },
        '.min-w-750': { minWidth: '750px' },
        '.min-w-1050': { minWidth: '1050px' },
        '.max-w-450': { maxWidth: '450px' },
        '.max-w-550': { maxWidth: '550px' },
        '.max-h-500': { maxHeight: '500px' },
        '.max-w-600': { maxWidth: '600px' },
        '.max-w-770': { maxWidth: '770px' },
        '.max-w-800': { maxWidth: '800px' },
        '.max-w-850': { maxWidth: '850px' },
        '.max-w-900': { maxWidth: '900px' },
        '.max-w-1340': { maxWidth: '1340px' },
        '.h-full': { height: '100% !important' },
        '.min-h-full': { minHeight: '100% !important' },
        '.h-auto': { height: 'auto' },
        '.h-full-screen': { height: '100vh' },
        '.min-h-full-screen': { minHeight: '100vh !important' },
        '.h-150px': { height: '150px !important' },
        '.size-36': { height: '36px !important', width: '36px !important' },
        '.size-24': { height: '24px !important', width: '24px !important' },
        ...generateMarginPadding(0, 25, 0.25, 'rem'),
        ...generateMarginPadding(1, 16, 1, 'px'),
        ...generateMarginPadding(-25, -1, 0.25, 'rem'),
        ...generateMarginPadding(-16, -1, 1, 'px'),
        ...generateHeightWidh(),
    },
}))

const generateMarginPadding = (
    start = 0,
    end = 25,
    increament = 0.25,
    unit = 'rem'
) => {
    let classList = {}

    for (let i = start; i <= end; i++) {
        classList[`.m-${i}${unit === 'px' ? 'px' : ''}`] = {
            margin: `${i * increament}${unit} !important`,
        }
        classList[`.mt-${i}${unit === 'px' ? 'px' : ''}`] = {
            marginTop: `${i * increament}${unit} !important`,
        }
        classList[`.mb-${i}${unit === 'px' ? 'px' : ''}`] = {
            marginBottom: `${i * increament}${unit} !important`,
        }
        classList[`.mr-${i}${unit === 'px' ? 'px' : ''}`] = {
            marginRight: `${i * increament}${unit} !important`,
        }
        classList[`.ml-${i}${unit === 'px' ? 'px' : ''}`] = {
            marginLeft: `${i * increament}${unit} !important`,
        }
        classList[`.mx-${i}${unit === 'px' ? 'px' : ''}`] = {
            marginLeft: `${i * increament}${unit} !important`,
            marginRight: `${i * increament}${unit} !important`,
        }
        classList[`.my-${i}${unit === 'px' ? 'px' : ''}`] = {
            marginTop: `${i * increament}${unit} !important`,
            marginBottom: `${i * increament}${unit} !important`,
        }

        classList[`.p-${i}${unit === 'px' ? 'px' : ''}`] = {
            padding: `${i * increament}${unit} !important`,
        }
        classList[`.pt-${i}${unit === 'px' ? 'px' : ''}`] = {
            paddingTop: `${i * increament}${unit} !important`,
        }
        classList[`.pb-${i}${unit === 'px' ? 'px' : ''}`] = {
            paddingBottom: `${i * increament}${unit} !important`,
        }
        classList[`.pr-${i}${unit === 'px' ? 'px' : ''}`] = {
            paddingRight: `${i * increament}${unit} !important`,
        }
        classList[`.pl-${i}${unit === 'px' ? 'px' : ''}`] = {
            paddingLeft: `${i * increament}${unit} !important`,
        }
        classList[`.px-${i}${unit === 'px' ? 'px' : ''}`] = {
            paddingLeft: `${i * increament}${unit} !important`,
            paddingRight: `${i * increament}${unit} !important`,
        }
        classList[`.py-${i}${unit === 'px' ? 'px' : ''}`] = {
            paddingTop: `${i * increament}${unit} !important`,
            paddingBottom: `${i * increament}${unit} !important`,
        }
    }

    return classList
}

const generateHeightWidh = (
    start = 0,
    end = 400,
    increament = 4,
    unit = 'px'
) => {
    let classList = {}

    for (let i = start; i <= end; i += increament) {
        classList[`.w-${i}`] = {
            width: `${i}${unit} !important`,
        }
        classList[`.min-w-${i}`] = {
            minWidth: `${i}${unit} !important`,
        }
        classList[`.max-w-${i}`] = {
            maxWidth: `${i}${unit} !important`,
        }
        classList[`.h-${i}`] = {
            height: `${i}${unit} !important`,
        }
        classList[`.min-h-${i}`] = {
            minHeight: `${i}${unit} !important`,
        }
        classList[`.max-h-${i}`] = {
            maxHeight: `${i}${unit} !important`,
        }
    }

    return classList
}
