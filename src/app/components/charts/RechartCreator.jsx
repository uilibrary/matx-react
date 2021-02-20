import React from 'react'
import { ResponsiveContainer } from 'recharts'

const RechartCreator = ({ height = '320px', width = '100%', children }) => {
    return (
        <div style={{ height, width }}>
            <ResponsiveContainer>{children}</ResponsiveContainer>
        </div>
    )
}

export default RechartCreator
