import React from 'react'
import { Small } from 'app/components/Typography'
import { Box, useTheme } from '@mui/system'
import { SimpleCard, MatxProgressBar } from 'app/components'

const Campaigns = () => {
    const theme = useTheme()
    const secondary = theme.palette.text.secondary

    return (
        <div>
            <SimpleCard title="Campaigns">
                <Small sx={{ color: secondary }}>Today</Small>
                <Box sx={{ pt: 1 }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Google (102k)"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Twitter (40k)"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Tensor (80k)"
                />

                <Box sx={{ py: '12px' }} />
                <Small sx={{ color: secondary }}>Yesterday</Small>
                <Box sx={{ py: 1 }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Google (102k)"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Twitter (40k)"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Tensor (80k)"
                />

                <Box sx={{ py: '12px' }} />
                <Small sx={{ color: secondary }}>Yesterday</Small>
                <Box sx={{ py: '8px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Google (102k)"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Twitter (40k)"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Tensor (80k)"
                />
            </SimpleCard>
        </div>
    )
}

export default Campaigns
