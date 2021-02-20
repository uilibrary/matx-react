import React from 'react'
import { withStyles } from '@material-ui/styles'

const generateFontProperty = (fontObject) => {
    return `${fontObject.fontWeight} ${fontObject.fontSize}/${fontObject.lineHeight} ${fontObject.fontFamily}`
}

const generateShadowVars = (theme) => {
    return theme.shadows.reduce(function (result, item, index, array) {
        result[`--elevation-z${index}`] = item
        return result
    }, {})
}

const styles = (theme) => ({
    '@global': {
        ':root': {
            ...{
                '--primary': theme.palette.primary.main,
                '--secondary': theme.palette.secondary.main,
                '--error': theme.palette.error.main,
                '--bg-default': theme.palette.background.default,
                '--bg-paper': theme.palette.background.paper,
                '--text-body': theme.palette.text.primary,
                '--text-muted': theme.palette.text.secondary,
                '--text-disabled': theme.palette.text.disabled,
                '--text-hint': theme.palette.text.hint,
                '--font': theme.typography.fontFamily,
                '--font-caption': generateFontProperty(
                    theme.typography.caption
                ),
                '--font-h1': generateFontProperty(theme.typography.h1),
                '--font-h2': generateFontProperty(theme.typography.h2),
                '--font-h3': generateFontProperty(theme.typography.h3),
                '--font-h4': generateFontProperty(theme.typography.h4),
                '--font-h5': generateFontProperty(theme.typography.h5),
                '--font-h6': generateFontProperty(theme.typography.h6),
                '--font-overline': generateFontProperty(
                    theme.typography.overline
                ),
                '--font-body-1': generateFontProperty(theme.typography.body1),
                '--font-body-2': generateFontProperty(theme.typography.body2),
                '--font-subtitle-1': generateFontProperty(
                    theme.typography.subtitle1
                ),
                '--font-subtitle-2': generateFontProperty(
                    theme.typography.subtitle2
                ),
                '--font-button': generateFontProperty(theme.typography.button),
                '--font-headline': '400 24px/32px var(--font)',
                '--font-title': '500 18px/26px var(--font)',
                '--font-display-1': '400 34px/40px var(--font)',
                '--font-display-2': '400 45px/48px var(--font)',
                '--font-display-3': '400 56px/56px var(--font)',
                '--font-display-4': '300 112px/112px var(--font)',
            },
            ...generateShadowVars(theme),
        },
    },
})

const MatxCssVars = ({ children }) => {
    return <React.Fragment>{children}</React.Fragment>
}

export default withStyles(styles, { withTheme: true })(MatxCssVars)
