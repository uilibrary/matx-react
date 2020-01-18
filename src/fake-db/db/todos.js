import Mock from "../mock";
import * as _ from "lodash";

const TodoDB = {
  todo: [
    {
      id: 1,
      title: "API problem",
      note: "API is malfunctioning. kindly fix it",
      important: true,
      starred: true,
      done: false,
      read: false,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),

      tag: [1, 2]
    },
    {
      id: 2,
      title: "Mobile problem",
      note: "Mobile is malfunctioning. fix it",
      important: false,
      starred: false,
      done: true,
      read: true,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),

      tag: [2]
    },
    {
      id: 3,
      title: "API problem",
      note: "API is malfunctioning. fix it",
      important: false,
      starred: false,
      done: true,
      read: false,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),

      tag: [1]
    },
    {
      id: 4,
      title: "API problem",
      note: "API is malfunctioning. fix it",
      important: false,
      starred: false,
      done: false,
      read: true,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),

      tag: [1, 2, 3]
    },
    {
      id: 5,
      title: "API problem",
      note: "API is malfunctioning. fix it",
      important: false,
      starred: false,
      done: true,
      read: false,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),

      tag: [1]
    }
  ],

  tag: [
    {
      id: 1,
      name: "frontend"
    },
    {
      id: 2,
      name: "backend"
    },
    {
      id: 3,
      name: "API"
    },
    {
      id: 4,
      name: "issue"
    },
    {
      id: 5,
      name: "mobile"
    }
  ]
};

Mock.onGet("/api/todo/all").reply(config => {
  const response = TodoDB.todo;
  return [200, response];
});

Mock.onGet("/api/todo/tag").reply(config => {
  const response = TodoDB.tag;
  return [200, response];
});

Mock.onGet("/api/todo").reply(config => {
  const id = parseInt(config.data);

  const response = TodoDB.todo.find(todo => todo.id === id);
  return [200, response];
});

Mock.onPost("/api/todo/reorder").reply(config => {
  let { todoList } = JSON.parse(config.data);

  TodoDB.todo = [...todoList];
  let response = TodoDB.todo;
  return [200, response];
});

Mock.onPost("/api/todo/add").reply(config => {
  let { todo } = JSON.parse(config.data);
  TodoDB.todo.push({ ...todo });
  let response = TodoDB.todo;
  return [200, response];
});

Mock.onPost("/api/todo/tag/add").reply(config => {
  let { tag } = JSON.parse(config.data);
  TodoDB.tag.push({ ...tag });
  let response = TodoDB.tag;
  return [200, response];
});

Mock.onPost("/api/todo/update").reply(config => {
  let { todo } = JSON.parse(config.data);

  TodoDB.todo.map((t, index) => {
    if (t.id === todo.id) {
      TodoDB.todo[index] = { ...todo };
    }
    return "dummy value";
  });

  let response = TodoDB.todo;
  return [200, response];
});

Mock.onPost("/api/todo/delete").reply(config => {
  let { todo } = JSON.parse(config.data);
  _.remove(TodoDB.todo, t => t.id === todo.id);
  let response = TodoDB.todo;
  return [200, response];
});

Mock.onPost("/api/todo/tag/delete").reply(config => {
  let { tag } = JSON.parse(config.data);
  _.remove(TodoDB.tag, t => t.id === tag.id);
  let response = TodoDB.tag;
  return [200, response];
});

// Mock.onPost("/api/chat/create-chat-room").reply(config => {
//   let data = JSON.parse(config.data);
//   let { id, chatId, ...rest } = data;
//   ChatDB.user.map(user => {
//     if (id === user.id) {
//       user.chatInfo.push({ chatId, ...rest });
//     }
//   });
//   ChatDB.chatCollection.push({
//     id: chatId,
//     chats: []
//   });

//   let temp;
//   let response = ChatDB.user
//     .find(user => user.id === id)
//     .chatInfo.map(contact => {
//       temp = ChatDB.contacts.find(user => user.id === contact.contactId);
//       return { ...temp, ...contact };
//     });
//   response = _.orderBy(response, ["lastChatTime"], ["desc"]);
//   console.log(response);

//   return [200, response];
// });
