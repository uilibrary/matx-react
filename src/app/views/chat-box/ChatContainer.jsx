import React, { Fragment } from 'react'
import {
    IconButton,
    Icon,
    Divider,
    Fab,
    TextField,
    MenuItem,
    Hidden,
} from '@mui/material'
import { MatxMenu } from 'app/components'
import Scrollbar from 'react-perfect-scrollbar'
import EmptyMessage from './EmptyMessage'
import { ChatAvatar } from 'app/components'
import { getTimeDifference } from 'utils'
import shortid from 'shortid'
import { Box, styled, useTheme } from '@mui/system'
import { useState } from 'react'
import { Paragraph, Small, Span } from 'app/components/Typography'

const ChatRoot = styled('div')(() => ({
    height: 450,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(0, 0, 0, 0.05)',
}))

const LeftContent = styled('div')(({ theme }) => ({
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
}))

const UserName = styled('h5')(() => ({
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    whiteSpace: 'pre',
    marginLeft: '16px',
}))

const UserStatus = styled('div')(({ theme, userId, contactId }) => ({
    padding: '8px 16px',
    marginBottom: '8px',
    borderRadius: '4px',
    color: userId === contactId && '#fff',
    background:
        userId === contactId
            ? theme.palette.primary.main
            : theme.palette.background.paper,
}))

const StyledItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& .icon': {
        marginRight: '16px',
    },
}))

const ScrollBox = styled(Scrollbar)(({ theme }) => ({
    flexGrow: 1,
    position: 'relative',
}))

const MessageBox = styled('div')(({ theme }) => ({
    height: '100%',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
}))

const Message = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '12px 16px',
}))

const ChatContainer = ({
    id: currentUserId,
    toggleSidenav,
    currentChatRoom,
    opponentUser,
    messageList = [],
    handleMessageSend,
}) => {
    const [message, setMessage] = useState('')
    const sendMessageOnEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            let tempMessage = message.trim()
            if (tempMessage !== '') handleMessageSend(tempMessage)
            setMessage('')
        }
    }
    const theme = useTheme()
    const secondary = theme.palette.text.secondary

    return (
        <ChatRoot>
            <LeftContent>
                <Box display="flex" alignItems="center">
                    <Hidden mdUp>
                        <IconButton size="large" onClick={toggleSidenav}>
                            <Icon sx={{ color: '#fff' }}>short_text</Icon>
                        </IconButton>
                    </Hidden>

                    <Hidden smDown>
                        <Box pl="12px" />
                    </Hidden>

                    {opponentUser && (
                        <Fragment>
                            <ChatAvatar
                                src={opponentUser.avatar}
                                status={opponentUser.status}
                            />
                            <UserName>{opponentUser.name}</UserName>
                        </Fragment>
                    )}
                </Box>
                <MatxMenu
                    menuButton={
                        <IconButton size="large">
                            <Icon sx={{ color: '#fff' }}>more_vert</Icon>
                        </IconButton>
                    }
                >
                    <StyledItem>
                        <Icon className="icon">account_circle</Icon> Contact
                    </StyledItem>
                    <StyledItem>
                        <Icon className="icon">volume_mute</Icon> Mute
                    </StyledItem>
                    <StyledItem>
                        <Icon className="icon">delete</Icon> Clear Chat
                    </StyledItem>
                </MatxMenu>
            </LeftContent>

            <ScrollBox id="chat-message-list">
                {currentChatRoom === '' && (
                    <MessageBox>
                        <EmptyMessage />
                        <p>Select a contact</p>
                    </MessageBox>
                )}
                {messageList.map((message, index) => (
                    <Message key={shortid.generate()}>
                        <ChatAvatar
                            src={message.avatar}
                            status={message.status}
                        />
                        <Box ml={2}>
                            <Paragraph sx={{ m: 0, mb: 1, color: secondary }}>
                                {message.name}
                            </Paragraph>
                            <UserStatus
                                userId={currentUserId}
                                contactId={message.contactId}
                            >
                                <Span
                                    sx={{
                                        whiteSpace: 'pre-wrap',
                                        wordBreak: 'break-word',
                                    }}
                                >
                                    {message.text}
                                </Span>
                            </UserStatus>
                            <Small sx={{ m: 0, color: secondary }}>
                                {getTimeDifference(new Date(message.time))} ago
                            </Small>
                        </Box>
                    </Message>
                ))}
            </ScrollBox>

            <Divider />

            {currentChatRoom !== '' && (
                <Box px={2} py={1} display="flex" alignItems="center">
                    <TextField
                        label="Type your message here*"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyUp={sendMessageOnEnter}
                        fullWidth
                        multiline={true}
                        rows={1}
                        variant="outlined"
                    />
                    <div>
                        <Fab
                            onClick={() => {
                                if (message.trim() !== '')
                                    handleMessageSend(message)
                                setMessage('')
                            }}
                            color="primary"
                            sx={{ ml: 2 }}
                        >
                            <Icon>send</Icon>
                        </Fab>
                    </div>
                </Box>
            )}
        </ChatRoot>
    )
}

export default ChatContainer
