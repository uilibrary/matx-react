import React, { useState } from 'react'
import { styled } from '@mui/system'
import { Icon, IconButton, Hidden } from '@mui/material'

const ContentBox = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column !important',
    '& a': {
        margin: '0 0 16px !important',
    },
}))

const TopbarMenu = (props) => {
    let { offsetTop } = props
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div className={`menu-wrap ${open && 'open'}`}>
            <Hidden mdUp>
                <IconButton onClick={handleToggle}>
                    <Icon>{open ? 'close' : 'more_vert'}</Icon>
                </IconButton>
            </Hidden>

            <ContentBox
                style={{ top: offsetTop }}
                className="menu-area"
            >
                {props.children}
            </ContentBox>
        </div>
    )
}

export default TopbarMenu
