import React from 'react'
import { styled } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Snackbar, IconButton } from '@mui/material'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    padding: theme.spacing(0.5)
}))

class ConsecutiveSnackbars extends React.Component {
    queue = []
    state = {
        open: false,
    }

    handleClick = (message) => () => {
        this.queue.push({
            message,
            key: new Date().getTime(),
        })

        if (this.state.open) {
            // immediately begin dismissing current message
            // to start showing new one
            this.setState({ open: false })
        } else {
            this.processQueue()
        }
    }

    processQueue = () => {
        if (this.queue.length > 0) {
            this.setState({
                messageInfo: this.queue.shift(),
                open: true,
            })
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        this.setState({ open: false })
    }

    handleExited = () => {
        this.processQueue()
    }

    render() {
        const { messageInfo = {} } = this.state

        return (
            <div>
                <Button onClick={this.handleClick('Message A')}>
                    Show message A
                </Button>
                <Button onClick={this.handleClick('Message B')}>
                    Show message B
                </Button>
                <Snackbar
                    key={messageInfo.key}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    onExited={this.handleExited}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{messageInfo.message}</span>}
                    action={[
                        <Button
                            key="undo"
                            color="secondary"
                            size="small"
                            onClick={this.handleClose}
                        >
                            UNDO
                        </Button>,
                        <StyledIconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </StyledIconButton>,
                    ]}
                />
            </div>
        )
    }
}

export default ConsecutiveSnackbars
