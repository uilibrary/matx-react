import { makeStyles } from '@material-ui/core/styles'

export const commonStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.circular-image-small': {
            height: '48px',
            width: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
        },
        '.card': { transition: 'all 0.3s ease' },
        '.card:hover': { boxShadow: theme.shadows[12] },
        '.card-title': {
            fontSize: '1rem',
            textTransform: 'capitalize',
            fontWeight: '500',
        },
        '.card-subtitle': { fontSize: '0.875rem', color: 'var(--text-muted)' },
        '.theme-dark .card-subtitle': { color: 'rgba(255, 255, 255, 0.54)' },
        '.hide-on-mobile': { display: 'inherit' },
        '@media screen and (max-width: 767px)': {
            '.hide-on-mobile': { display: 'none !important' },
            '.show-on-mobile': { display: 'inherit !important' },
            '.invisible-on-pc': { visibility: 'visible' },
        },
        '@media screen and (min-width: 1200px)': {
            '.hide-on-pc': { display: 'none !important' },
        },
        '@media screen and (max-width: 1200px)': {
            '.show-on-pc': { display: 'none !important' },
        },
        '.VictoryContainer svg': { height: '100% !important' },
        '.box-shadow-none': { boxShadow: 'none !important' },
        '.circle-44': { height: '44px !important', width: '44px !important' },
        '.circle-32': {
            height: '32px !important',
            minHeight: '32px !important',
            width: '32px !important',
        },
        '.circle-32 .MuiFab-root': { minHeight: '32px !important' },
        '.circle-32 .MuiIcon-root': { fontSize: '13px !important' },
        '.show-on-mobile': { display: 'none !important' },
        '.invisible-on-pc': { visibility: 'hidden' },
        '.highlight-js pre': { whiteSpace: 'pre-line' },
        '.cursor-pointer': {
            cursor: 'pointer',
        },
        '.cursor-move': {
            cursor: 'move',
        },
        '.avatar': {
            height: '32px !important',
            width: '32px !important',
        },
        '.face-group .avatar:not(:first-child)': {
            marginLeft: '-0.875rem !important',
        },
        '.opacity-1': {
            opacity: 1,
        },
    },
}))
