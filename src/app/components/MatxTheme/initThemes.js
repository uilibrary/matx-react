import { forEach, merge } from 'lodash'
import themeOptions from './themeOptions'
import { themeColors } from './themeColors'
import { createTheme } from '@mui/material'

function createMatxThemes() {
    let themes = {}

    forEach(themeColors, (value, key) => {
        themes[key] = createTheme(merge({}, themeOptions, value))
    })
    return themes
}
export const themes = createMatxThemes()
