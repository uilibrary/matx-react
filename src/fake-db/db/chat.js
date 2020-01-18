import Mock from "../mock";
import shortId from "shortid";
import * as _ from "lodash";

const ChatDB = {
  user: [
    {
      id: "7863a6802ez0e277a0f98534",
      name: "John Doe",
      avatar: "assets/images/face-1.jpg",
      status: "online",
      chatInfo: [
        {
          chatId: "89564a680b3249760ea21fe77",
          contactId: "323sa680b3249760ea21rt47",
          unread: 4,
          lastChatTime: "2017-06-12T02:10:18.931Z"
        },
        {
          chatId: "3289564a680b2134760ea21fe7753",
          contactId: "14663a3406eb47ffa63d4fec9429cb71",
          unread: 0,
          lastChatTime: "2019-03-10T02:10:18.931Z"
        }
      ]
    }
  ],

  contacts: [
    {
      id: "323sa680b3249760ea21rt47",
      name: "Frank Powell",
      avatar: "assets/images/faces/13.jpg",
      status: "online",
      mood: ""
    },
    {
      id: "7863a6802ez0e277a0f98534",
      name: "John Doe",
      avatar: "assets/images/face-1.jpg",
      status: "online",
      mood: ""
    },
    {
      id: "14663a3406eb47ffa63d4fec9429cb71",
      name: "Betty Diaz",
      avatar: "assets/images/faces/12.jpg",
      status: "online",
      mood: ""
    },
    {
      id: "43bd9bc59d164b5aea498e3ae1c24c3c",
      name: "Brian Stephens",
      avatar: "assets/images/faces/3.jpg",
      status: "online",
      mood: ""
    },
    {
      id: "3fc8e01f3ce649d1caf884fbf4f698e4",
      name: "Jacqueline Day",
      avatar: "assets/images/faces/16.jpg",
      status: "offline",
      mood: ""
    },
    {
      id: "e929b1d790ab49968ed8e34648553df4",
      name: "Arthur Mendoza",
      avatar: "assets/images/faces/10.jpg",
      status: "online",
      mood: ""
    },
    {
      id: "d6caf04bba614632b5fecf91aebf4564",
      name: "Jeremy Lee",
      avatar: "assets/images/faces/9.jpg",
      status: "offline",
      mood: ""
    },
    {
      id: "be0fb188c8e242f097fafa24632107e4",
      name: "Johnny Newman",
      avatar: "assets/images/faces/5.jpg",
      status: "offline",
      mood: ""
    },
    {
      id: "dea902191b964a68ba5f2d93cff37e13",
      name: "Jeffrey Little",
      avatar: "assets/images/faces/15.jpg",
      status: "online",
      mood: ""
    },
    {
      id: "0bf58f5ccc4543a9f8747350b7bda3c7",
      name: "Barbara Romero",
      avatar: "assets/images/faces/4.jpg",
      status: "offline",
      mood: ""
    },
    {
      id: "c5d7498bbcb84d81fc72168871ac6a6e",
      name: "Daniel James",
      avatar: "assets/images/faces/2.jpg",
      status: "offline",
      mood: ""
    },
    {
      id: "97bfbdd9413e46efdaca2010400fe18c",
      name: "Alice Sanders",
      avatar: "assets/images/faces/17.jpg",
      status: "offline",
      mood: ""
    }
  ],

  chatCollection: [
    {
      id: "89564a680b3249760ea21fe77",
      chats: [
        {
          contactId: "323sa680b3249760ea21rt47",
          text: "Do you ever find yourself falling into the “discount trap?”",
          time: "2018-02-10T08:45:28.291Z"
        },
        {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Giving away your knowledge or product just to gain clients?",
          time: "2018-02-10T08:45:28.291Z"
        },
        {
          contactId: "323sa680b3249760ea21rt47",
          text: "Yes",
          time: "2018-02-10T08:45:28.291Z"
        },
        {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Don’t feel bad. It happens to a lot of us",
          time: "2018-02-10T08:45:28.291Z"
        },
        {
          contactId: "323sa680b3249760ea21rt47",
          text: "Do you ever find yourself falling into the “discount trap?”",
          time: "2018-02-10T08:45:28.291Z"
        },
        {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Giving away your knowledge or product just to gain clients?",
          time: "2018-02-10T08:45:28.291Z"
        },
        {
          contactId: "323sa680b3249760ea21rt47",
          text: "Yes",
          time: "2018-02-10T08:45:28.291Z"
        },
        {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Don’t feel bad. It happens to a lot of us",
          time: "2018-02-10T08:45:28.291Z"
        }
      ]
    },
    {
      id: "3289564a680b2134760ea21fe7753",
      chats: [
        {
          contactId: "14663a3406eb47ffa63d4fec9429cb71",
          text: "Do you ever find yourself falling into the “discount trap?”",
          time: "2019-03-10T08:45:28.291Z"
        },
        {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Giving away your knowledge or product just to gain clients?",
          time: "2019-03-10T08:45:28.291Z"
        },
        {
          contactId: "14663a3406eb47ffa63d4fec9429cb71",
          text: "Yes",
          time: "2019-03-10T08:45:28.291Z"
        },
        {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Don’t feel bad. It happens to a lot of us",
          time: "2019-03-10T08:45:28.291Z"
        }
      ]
    }
  ]
};

Mock.onGet("/api/chat").reply(config => {
  const id = config.data;
  const chats = ChatDB.chatCollection.find(collection => collection.id === id)
    .chats;
  const response = chats.map(chat => {
    let temp = ChatDB.contacts.find(user => user.id === chat.contactId);
    return { ...chat, ...temp };
  });
  return [200, response];
});

Mock.onGet("/api/chat/chat-room").reply(config => {
  const { currentUser, contactId } = JSON.parse(config.data);

  const chatUser = ChatDB.user.find(user => user.id === currentUser);
  const chatRoom = chatUser.chatInfo.find(chat => chat.contactId === contactId);

  if (chatRoom) {
    const chats = ChatDB.chatCollection.find(
      collection => collection.id === chatRoom.chatId
    ).chats;
    const messageList = chats.map(chat => {
      let temp = ChatDB.contacts.find(user => user.id === chat.contactId);
      return { ...chat, ...temp };
    });
    const response = {
      chatId: chatRoom.chatId,
      messageList,
      recentListUpdated: false
    };
    return [200, response];
  } else {
    let chatId = shortId.generate();
    ChatDB.user.map(user => {
      if (currentUser === user.id) {
        user.chatInfo.push({
          chatId,
          contactId,
          lastChatTime: Date.now(),
          unread: 0
        });
      }
    });
    ChatDB.chatCollection.push({
      id: chatId,
      chats: []
    });

    const response = {
      chatId,
      messageList: [],
      recentListUpdated: true
    };

    return [200, response];
  }
});

Mock.onGet("/api/chat/contacts/recent").reply(config => {
  let temp = { contact: "" };
  const id = config.data;
  const contacts = ChatDB.user.find(user => user.id === id).chatInfo;
  const response = contacts.map(contact => {
    temp.contact = ChatDB.contacts.find(user => user.id === contact.contactId);
    return { ...temp.contact, ...contact };
  });
  return [200, response];
});

Mock.onGet("/api/chat/contacts/all").reply(config => {
  const id = config.data;
  const response = ChatDB.contacts.filter(contact => contact.id !== id);
  return [200, response];
});

Mock.onGet("/api/chat/contacts").reply(config => {
  const id = config.data;
  const response = ChatDB.contacts.find(contact => contact.id === id);
  return [200, response];
});

Mock.onPost("/api/chat/add").reply(config => {
  let chatDetails = JSON.parse(config.data);
  let { chatId } = chatDetails;
  ChatDB.chatCollection.map(chatRoom => {
    if (chatId === chatRoom.id) {
      delete chatDetails.chatId;
      chatRoom.chats.push({ ...chatDetails });
    }
  });
  let chats = ChatDB.chatCollection.find(chatRoom => chatRoom.id === chatId)
    .chats;

  let response = chats.map(chat => {
    let temp = ChatDB.contacts.find(user => user.id === chat.contactId);
    return { ...chat, ...temp };
  });
  return [200, response];
});
