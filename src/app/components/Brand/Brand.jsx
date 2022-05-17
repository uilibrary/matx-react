import React from 'react'
import { Span } from '../../components/Typography'
import { styled, Box } from '@mui/system'
import useSettings from 'app/hooks/useSettings'

const BrandRoot = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 18px 20px 29px',
}))

const IMG = styled('img')(() => ({
    width: '100%',
}))
const StyledSpan = styled(Span)(({ theme, mode }) => ({
    fontSize: 18,
    marginLeft: '.5rem',
    display: mode === 'compact' ? 'none' : 'block',
}))

const Brand = ({ children }) => {
    const { settings } = useSettings()
    const leftSidebar = settings.layout1Settings.leftSidebar
    const { mode } = leftSidebar

    return (
        <BrandRoot>
            <Box display="flex" alignItems="center">
                <IMG
                                src="/assets/images/buy4earn/logo-sm.png"
                                alt=""
                            />
                <StyledSpan mode={mode} className="sidenavHoverShow">
                    Buy4earn
                </StyledSpan>
            </Box>
            <Box
                className="sidenavHoverShow"
                sx={{ display: mode === 'compact' ? 'none' : 'block' }}
            >
                {children || null}
            </Box>
        </BrandRoot>
    )
}

export default Brand
