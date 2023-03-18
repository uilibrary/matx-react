import { Avatar, Box, Divider, Icon, IconButton, styled, TextField, useTheme } from '@mui/material';
import { ChatAvatar } from 'app/components';
import { convertHexToRGB } from 'app/utils/utils';
import { useCallback, useEffect, useState } from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import { H5, H6, Span } from './Typography';

const ChatContainer = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: '#fff'
});

const StyledScrollBar = styled(ScrollBar)({
  flexGrow: 1
});

const ProfileBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 12px 12px 20px',
  color: theme.palette.primary.main,
  background: '#fafafa'
}));

const ChatStatus = styled('div')(({ theme }) => ({
  marginLeft: '12px',
  color: theme.palette.primary.main,
  '& h5': {
    marginTop: 0,
    fontSize: '14px',
    marginBottom: '3px'
  },
  '& span': { fontWeight: '500' }
}));

const ChatMessage = styled('div')(({ theme }) => ({
  padding: '8px',
  maxWidth: 240,
  fontSize: '14px',
  borderRadius: '4px',
  marginBottom: '8px',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  color: theme.palette.primary.main,
  background: '#fafafa'
}));

const MessageTime = styled('span')(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '500',
  color: theme.palette.primary.main
}));

const ChatImgContainer = styled('div')({
  padding: '20px',
  display: 'flex',
  justifyContent: 'flex-end'
});

const ChatImgBox = styled('div')(({ theme }) => ({
  padding: '8px',
  fontSize: '14px',
  maxWidth: 240,
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  color: theme.palette.primary.main,
  background: '#fafafa'
}));

const ChatImg = styled('img')(() => ({ width: '40px' }));
const ChatImgSize = styled(MessageTime)(() => ({}));

// for previewing bot message
const globalMessageList = [];

const Chatbox = ({ togglePopup }) => {
  const [isAlive, setIsAlive] = useState(true);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const currentUserId = '7863a6802ez0e277a0f98534';
  const chatBottomRef = document.querySelector('#chat-scroll');

  const sendMessageOnEnter = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      let tempMessage = message.trim();
      if (tempMessage !== '') {
        let tempList = [...messageList];
        let messageObject = {
          text: tempMessage,
          contactId: currentUserId
        };
        tempList.push(messageObject);
        globalMessageList.push(messageObject);
        if (isAlive) setMessageList(tempList);
        dummyReply();
      }
      setMessage('');
    }
  };

  const dummyReply = async () => {
    setTimeout(() => {
      let tempList = [...messageList];
      let messageObject = {
        text: 'Good to hear from you. enjoy!!!',
        contactId: 'opponents contact id',
        avatar: '/assets/images/faces/13.jpg',
        name: 'Frank Powell'
      };

      tempList.push(messageObject);
      globalMessageList.push(messageObject);
      if (isAlive) setMessageList(globalMessageList);
    }, 2000);
  };

  const scrollToBottom = useCallback(() => {
    if (chatBottomRef) {
      chatBottomRef.scrollTo({
        top: chatBottomRef.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatBottomRef]);

  useEffect(() => {
    if (isAlive) {
      setMessageList([
        {
          contactId: '323sa680b3249760ea21rt47',
          text: 'Do you ever find yourself falling into the “discount trap?”',
          time: '2018-02-10T08:45:28.291Z',
          id: '323sa680b3249760ea21rt47',
          name: 'Frank Powell',
          avatar: '/assets/images/faces/13.jpg',
          status: 'online',
          mood: ''
        },
        {
          contactId: '7863a6802ez0e277a0f98534',
          text: 'Giving away your knowledge or product just to gain clients?',
          time: '2018-02-10T08:45:28.291Z',
          id: '7863a6802ez0e277a0f98534',
          name: 'John Doe',
          avatar: '/assets/images/face-1.jpg',
          status: 'online',
          mood: ''
        },
        {
          contactId: '323sa680b3249760ea21rt47',
          text: 'Yes',
          time: '2018-02-10T08:45:28.291Z',
          id: '323sa680b3249760ea21rt47',
          name: 'Frank Powell',
          avatar: '/assets/images/faces/13.jpg',
          status: 'online',
          mood: ''
        },
        {
          contactId: '7863a6802ez0e277a0f98534',
          text: 'Don’t feel bad. It happens to a lot of us',
          time: '2018-02-10T08:45:28.291Z',
          id: '7863a6802ez0e277a0f98534',
          name: 'John Doe',
          avatar: '/assets/images/face-1.jpg',
          status: 'online',
          mood: ''
        },
        {
          contactId: '323sa680b3249760ea21rt47',
          text: 'Do you ever find yourself falling into the “discount trap?”',
          time: '2018-02-10T08:45:28.291Z',
          id: '323sa680b3249760ea21rt47',
          name: 'Frank Powell',
          avatar: '/assets/images/faces/13.jpg',
          status: 'online',
          mood: ''
        },
        {
          contactId: '7863a6802ez0e277a0f98534',
          text: 'Giving away your knowledge or product just to gain clients?',
          time: '2018-02-10T08:45:28.291Z',
          id: '7863a6802ez0e277a0f98534',
          name: 'John Doe',
          avatar: '/assets/images/face-1.jpg',
          status: 'online',
          mood: ''
        },
        {
          contactId: '323sa680b3249760ea21rt47',
          text: 'Yes',
          time: '2018-02-10T08:45:28.291Z',
          id: '323sa680b3249760ea21rt47',
          name: 'Frank Powell',
          avatar: '/assets/images/faces/13.jpg',
          status: 'online',
          mood: ''
        },
        {
          contactId: '7863a6802ez0e277a0f98534',
          text: 'Don’t feel bad. It happens to a lot of us',
          time: '2018-02-10T08:45:28.291Z',
          id: '7863a6802ez0e277a0f98534',
          name: 'John Doe',
          avatar: '/assets/images/face-1.jpg',
          status: 'online',
          mood: ''
        }
      ]);
    }
  }, [isAlive]);

  useEffect(() => {
    scrollToBottom();
    return () => setIsAlive(false);
  }, [messageList, scrollToBottom]);

  const { palette } = useTheme();
  const primary = palette.primary.main;
  const textPrimary = palette.text.primary;

  return (
    <ChatContainer>
      <ProfileBox>
        <Box display="flex" alignItems="center">
          <ChatAvatar src="/assets/images/face-2.jpg" status="online" />
          <ChatStatus>
            <H5>Ryan Todd</H5>
            <Span>Active</Span>
          </ChatStatus>
        </Box>
        <IconButton onClick={togglePopup}>
          <Icon fontSize="small">clear</Icon>
        </IconButton>
      </ProfileBox>
      <StyledScrollBar id="chat-scroll">
        {messageList.map((item, ind) => (
          <Box
            key={ind}
            p="20px"
            display="flex"
            sx={{
              justifyContent: currentUserId === item.contactId && 'flex-end'
            }}
          >
            {currentUserId !== item.contactId && <Avatar src={item.avatar} />}
            <Box ml="12px">
              {currentUserId !== item.contactId && (
                <H5
                  sx={{
                    mb: '4px',
                    fontSize: '14px',
                    color: primary
                  }}
                >
                  {item.name}
                </H5>
              )}
              <ChatMessage>{item.text}</ChatMessage>
              <MessageTime>1 minute ago</MessageTime>
            </Box>
          </Box>
        ))}

        {/* example of image sent by current user*/}
        <ChatImgContainer>
          <Box ml="12px">
            <ChatImgBox>
              <ChatImg alt="laptop" src="/assets/images/laptop-1.png" />
              <Box ml="12px">
                <H6 sx={{ mt: 0, mb: '4px' }}>Asus K555LA.png</H6>
                <ChatImgSize>21.5KB</ChatImgSize>
              </Box>
            </ChatImgBox>
            <MessageTime>1 minute ago</MessageTime>
          </Box>
        </ChatImgContainer>
      </StyledScrollBar>
      <div>
        <Divider
          sx={{
            background: `rgba(${convertHexToRGB(textPrimary)}, 0.15)`
          }}
        />
        <TextField
          placeholder="Type here ..."
          multiline
          rowsMax={4}
          fullWidth
          sx={{ '& textarea': { color: primary } }}
          InputProps={{
            endAdornment: (
              <Box display="flex">
                <IconButton size="small">
                  <Icon>tag_faces</Icon>
                </IconButton>
                <IconButton size="small">
                  <Icon>attachment</Icon>
                </IconButton>
              </Box>
            ),
            classes: { root: 'pl-5 pr-3 py-3 text-body' }
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={sendMessageOnEnter}
        />
      </div>
    </ChatContainer>
  );
};

export default Chatbox;
