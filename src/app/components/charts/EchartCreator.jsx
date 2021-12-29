import React from 'react'
import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import PropTypes from 'prop-types'
import { EchartTheme } from 'app/components'
import { useTheme } from '@mui/system'

const EchartCreator = ({ height, option }) => {
    const theme = useTheme()

    echarts.registerTheme('echarts-theme', EchartTheme(theme))

    return (
        <ReactEcharts
            style={{ height: height, width: '100%' }}
            option={option}
            lazyUpdate={true}
            theme="echarts-theme"
        />
    )
}

EchartCreator.prototype = {
    height: PropTypes.string.isRequired,
    option: PropTypes.object.isRequired,
}

export default EchartCreator
