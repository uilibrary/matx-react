import { makeStyles } from '@material-ui/core/styles'

export const landingStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.landing': { color: 'rgba(0, 0, 0, 0.87)', overflow: 'hidden' },
        '.landing p': { color: 'rgba(var(--body), 0.74)' },
        '.landing a': { textDecoration: 'none' },
        '.landing div, .landing section': { boxSizing: 'border-box' },
        '.section-intro': { paddingTop: '7.5rem !important' },
        '.section': {
            padding: '5rem 0',

            '& .section__header': {
                margin: '0 0 32px',
                h2: {
                    fontSize: 32,
                    fontWeight: 700,
                    margin: '0 0 16px',
                },
                p: {
                    fontSize: 16,
                    maxWidth: '36rem',
                    margin: 0,
                },
            },
        },
        '.container': {
            padding: '0px 1rem',
            maxWidth: '1170px',
            margin: '0 auto',
        },
        '.header': {
            position: 'fixed',
            width: '100%',
            top: '0',
            background: 'var(--bg-paper)',
            left: '0',
            right: '0',
            padding: '20px 0',
            transition: 'padding 0.3s linear',
            zIndex: '999999',
        },
        '.header.header-fixed': {
            padding: '10px 0',
            background: '#ffffff',
            boxShadow:
                '0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28)',
            zIndex: '999',
        },
        '.header .header-container': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        '.header .header-container .brand': {
            display: 'flex',
            alignItems: 'center',
        },
        '.header .header-container .brand img': { maxHeight: '34px' },
        '.header .header-container ul.navigation': {
            listStyle: 'none',
            margin: '0 0 0 30px',
            padding: '0',
        },
        '.header .header-container ul.navigation li': {
            display: 'inline-block',
        },
        '.header .header-container ul.navigation li a': {
            display: 'flex',
            alignItems: 'center',
            color: 'rgba(0, 0, 0, 0.87)',
            padding: '8px 15px',
            fontWeight: '700',
            borderRadius: '4px',
            transition: 'all 0.3s ease-in',
        },
        '.header .header-container ul.navigation li a:hover': {
            background: '#f0f0f0',
        },
        '.header .header-container .header__toggle': { display: 'none' },
        '@media only screen and (max-width: 767px)': {
            '.header': {
                width: 'var(--topbar-mobile-width)',
                height: '100vh',
                left: 'auto',
                right: '0',
                padding: '20px 0 !important',
                boxShadow:
                    '-2px 0 4px rgba(0, 0, 0, 0.14), -2px 4px 8px rgba(0, 0, 0, 0.28) !important',
                transition: 'all 0.3s ease-in-out',
            },
            '.header.closed': {
                right: 'calc(-1 * var(--topbar-mobile-width) - 5px)',
            },
            '.header.closed .header__toggle': {
                color: 'rgba(0, 0, 0, 0.87)',
                background: '#ffffff',
                boxShadow:
                    '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            },
            '.header .header__toggle': {
                top: '10px',
                right: '15px',
                color: 'rgba(0, 0, 0, 0.87)',
                position: 'fixed',
                display: 'inline-block !important',
                transition: 'all 0.3s ease-in-out',
            },
            '.header .header-container': {
                flexDirection: 'column',
                padding: '0',
                height: '100%',
            },
            '.header .header-container .brand': {
                padding: '0 20px 20px',
                width: '100%',
            },
            '.header .header-container ul.navigation': {
                margin: '0',
                width: '100%',
            },
            '.header .header-container ul.navigation li': { display: 'block' },
            '.header .header-container ul.navigation li a': {
                padding: '15px 20px',
                borderRadius: '0',
            },
        },
    },
}))
