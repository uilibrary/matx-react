import React from 'react'
import { format } from 'date-fns'
import { Divider } from '@mui/material'
import { ChatAvatar } from 'app/components'
import Scrollbar from 'react-perfect-scrollbar'
import { Box, styled, useTheme } from '@mui/system'
import { Paragraph } from 'app/components/Typography'

const ChatSideNavRoot = styled('div')(({ theme }) => ({
    height: 450,
    borderRight: '1px solid rgba(0, 0, 0, 0.08)',
    background: theme.palette.background.default
}))

const StyledScrollBar = styled(Scrollbar)(() => ({
    height: '100%',
    position: 'relative'
}))

const LeftContent = styled('div')(({ theme }) => ({
    height: 56,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '16px',
    paddingRight: '16px',
    background: theme.palette.primary.main,
}))

const UserName = styled('h5')(() => ({
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    whiteSpace: 'pre',
    marginLeft: '16px',
    marginBottom: 0,
}))

const ContactList = styled('div')(() => ({
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background 250ms ease',
    '&:hover': { background: 'rgba(0, 0, 0, 0.054)' },
}))

const ChatSidenav = ({
    currentUser,
    contactList = [],
    recentContactList = [],
    handleContactClick,
}) => {
    const theme = useTheme()
    const secondary = theme.palette.text.secondary

    return (
        <ChatSideNavRoot>
            <LeftContent>
                <ChatAvatar
                    src={currentUser.avatar}
                    status={currentUser.status}
                />
                <UserName>{currentUser.name}</UserName>
            </LeftContent>
            <StyledScrollBar>
                {recentContactList.map((contact, index) => (
                    <ContactList
                        key={index}
                        onClick={() => handleContactClick(contact.id)}
                    >
                        <ChatAvatar
                            src={contact.avatar}
                            status={contact.status}
                        />
                        <Box pl={2}>
                            <Paragraph sx={{ m: "0" }}>
                                {contact.name}
                            </Paragraph>
                            <Paragraph sx={{ m: 0, color: secondary }}>
                                {format(
                                    new Date(contact.lastChatTime).getTime(),
                                    'MMMM dd, yyyy'
                                )}
                            </Paragraph>
                        </Box>
                    </ContactList>
                ))}
                <Divider />
                {contactList.map((contact, index) => (
                    <ContactList
                        key={index}
                        onClick={() => handleContactClick(contact.id)}
                        sx={{ padding: '4px 16px', }}
                    >
                        <ChatAvatar
                            src={contact.avatar}
                            status={contact.status}
                        />
                        <Box pl={2}>
                            <p>{contact.name}</p>
                        </Box>
                    </ContactList>
                ))}
            </StyledScrollBar>
        </ChatSideNavRoot>
    )
}

export default ChatSidenav
