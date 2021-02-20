import React, { useState, useEffect, useCallback } from 'react'
import { ChatAvatar } from 'app/components'
import { IconButton, Icon, Divider, TextField, Avatar } from '@material-ui/core'
import ScrollBar from 'react-perfect-scrollbar'
// import { getChatRoomByContactId } from "app/views/chat-box/ChatService";
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    lightBG: {
        background: 'rgba(var(--body), 0.03)',
    },
    dividerBG: {
        background: 'rgba(var(--body), 0.15)',
    },
}))
// for previewing bot message
const globalMessageList = []

const Chatbox = ({ togglePopup }) => {
    const [isAlive, setIsAlive] = useState(true)
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])
    const currentUserId = '7863a6802ez0e277a0f98534'
    const chatBottomRef = document.querySelector('#chat-scroll')

    const classes = useStyles()

    const sendMessageOnEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            let tempMessage = message.trim()
            if (tempMessage !== '') {
                let tempList = [...messageList]
                let messageObject = {
                    text: tempMessage,
                    contactId: currentUserId,
                }
                tempList.push(messageObject)
                globalMessageList.push(messageObject)
                if (isAlive) setMessageList(tempList)
                dummyReply()
            }
            setMessage('')
        }
    }

    const dummyReply = async () => {
        setTimeout(() => {
            let tempList = [...messageList]
            let messageObject = {
                text: 'Good to hear from you. enjoy!!!',
                contactId: 'opponents contact id',
                avatar: '/assets/images/faces/13.jpg',
                name: 'Frank Powell',
            }

            tempList.push(messageObject)
            globalMessageList.push(messageObject)
            if (isAlive) setMessageList(globalMessageList)
        }, 2000)
    }

    const scrollToBottom = useCallback(() => {
        if (chatBottomRef) {
            chatBottomRef.scrollTo({
                top: chatBottomRef.scrollHeight,
                behavior: 'smooth',
            })
        }
    }, [chatBottomRef])

    useEffect(() => {
        if (isAlive) {
            setMessageList([
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text:
                        'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Frank Powell',
                    avatar: '/assets/images/faces/13.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text:
                        'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'John Doe',
                    avatar: '/assets/images/face-1.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Frank Powell',
                    avatar: '/assets/images/faces/13.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'John Doe',
                    avatar: '/assets/images/face-1.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text:
                        'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Frank Powell',
                    avatar: '/assets/images/faces/13.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text:
                        'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'John Doe',
                    avatar: '/assets/images/face-1.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Frank Powell',
                    avatar: '/assets/images/faces/13.jpg',
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'John Doe',
                    avatar: '/assets/images/face-1.jpg',
                    status: 'online',
                    mood: '',
                },
            ])
        }
        // getChatRoomByContactId(currentUserId, "323sa680b3249760ea21rt47").then(
        //   ({ data }) => {
        //     if (isAlive) {
        //       setMessageList(data?.messageList);
        //     }
        //   }
        // );
    }, [isAlive])

    useEffect(() => {
        scrollToBottom()
        return () => setIsAlive(false)
    }, [messageList, scrollToBottom])

    return (
        <div className="flex-column h-full">
            <div
                className={clsx(
                    'flex justify-between items-center pl-5 py-3 pr-3',
                    classes.lightBG
                )}
            >
                <div className="flex items-center">
                    <ChatAvatar
                        src="/assets/images/face-2.jpg"
                        status="online"
                    />
                    <div className="ml-3">
                        <h5 className="mt-0 mb-3px text-14">Ryan Todd</h5>
                        <span className="text-muted font-medium">Active</span>
                    </div>
                </div>
                <IconButton onClick={togglePopup}>
                    <Icon className="text-body" fontSize="small">
                        clear
                    </Icon>
                </IconButton>
            </div>
            <ScrollBar className="flex-grow" id="chat-scroll">
                {messageList.map((item, ind) => (
                    <div
                        className={clsx({
                            'p-5 flex': true,
                            'justify-end': currentUserId === item.contactId,
                        })}
                        key={ind}
                    >
                        {currentUserId !== item.contactId && (
                            <Avatar src={item.avatar} />
                        )}
                        <div className="ml-3">
                            {currentUserId !== item.contactId && (
                                <h5 className="mt-0 mb-1 text-14">
                                    {item.name}
                                </h5>
                            )}
                            <div
                                className={clsx(
                                    'p-2 mb-2 max-w-240 border-radius-4 text-14 whitespace-pre-wrap',
                                    classes.lightBG
                                )}
                            >
                                {item.text}
                            </div>
                            <span className="text-muted text-13 font-medium">
                                1 minute ago
                            </span>
                        </div>
                    </div>
                ))}

                {/* example of image sent by current user*/}
                <div className="p-5 flex justify-end">
                    <div className="ml-3">
                        <div className="p-2 mb-2 flex justify-end items-center max-w-240 bg-light-gray border-radius-4 text-14">
                            <img
                                className="w-40"
                                src="/assets/images/laptop-1.png"
                                alt="laptop"
                            />
                            <div className="ml-3">
                                <h6 className="mt-0 mb-1">Asus K555LA.png</h6>
                                <span className="text-muted font-medium text-13">
                                    21.5KB
                                </span>
                            </div>
                        </div>
                        <span className="text-muted text-13 font-medium">
                            1 minute ago
                        </span>
                    </div>
                </div>
            </ScrollBar>
            <div>
                <Divider className={classes.dividerBG} />
                <TextField
                    placeholder="Type here ..."
                    multiline
                    rowsMax={4}
                    fullWidth
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                            <div className="flex">
                                <IconButton size="small">
                                    <Icon className="text-body">tag_faces</Icon>
                                </IconButton>
                                <IconButton size="small">
                                    <Icon className="text-body">
                                        attachment
                                    </Icon>
                                </IconButton>
                            </div>
                        ),
                        classes: { root: 'pl-5 pr-3 py-3 text-body' },
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyUp={sendMessageOnEnter}
                />
            </div>
        </div>
    )
}

export default Chatbox
