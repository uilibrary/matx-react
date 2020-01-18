import Mock from "../mock";
import * as _ from "lodash";
import shortId from "shortid";

// board => list => cardList

const ScrumBoardDB = {
  boardList: [
    {
      id: "c5d7498bbcb84d81fc7454448871ac6a6e",
      title: "Matx React",
      list: [
        {
          id: shortId.generate(),
          title: "Drag and Drop",
          cardList: [
            {
              id: shortId.generate(),
              title: "Beautiful DnD",
              coverImage: "/assets/images/sq-9.jpg",
              members: [
                "323sa680b3249760ea21rt47",
                "7863a6802ez0e277a0f98534",
                "14663a3406eb47ffa63d4fec9429cb71",
                "43bd9bc59d164b5aea498e3ae1c24c3c",
                "e929b1d790ab49968ed8e34648553df4"
              ],
              labels: [2, 3, 4],
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
              attachments: [
                {
                  name: "sky-life.jpg",
                  size: "1.2 MB",
                  url: "/assets/images/sq-11.jpg"
                }
              ],
              comments: [
                {
                  id: shortId.generate(),
                  uid: "7863a6802ez0e277a0f98534",
                  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                  time: new Date()
                }
              ]
            },
            {
              id: shortId.generate(),
              title: "Nested DnD",
              coverImage: "/assets/images/sq-11.jpg",
              members: [
                "323sa680b3249760ea21rt47",
                "7863a6802ez0e277a0f98534",
                "14663a3406eb47ffa63d4fec9429cb71",
                "43bd9bc59d164b5aea498e3ae1c24c3c",
                "e929b1d790ab49968ed8e34648553df4"
              ],
              labels: [2, 3, 4],
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
              attachments: [
                {
                  name: "sky-life.jpg",
                  size: "1.2 MB",
                  url: "/assets/images/sq-11.jpg"
                }
              ],
              comments: [
                {
                  id: shortId.generate(),
                  uid: "323sa680b3249760ea21rt47",
                  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                  time: new Date()
                }
              ]
            }
          ]
        },
        {
          id: shortId.generate(),
          title: "Chat App",
          cardList: [
            {
              id: shortId.generate(),
              title: "Beautiful DnD",
              coverImage: "/assets/images/sq-11.jpg",
              members: [
                "323sa680b3249760ea21rt47",
                "7863a6802ez0e277a0f98534",
                "14663a3406eb47ffa63d4fec9429cb71",
                "43bd9bc59d164b5aea498e3ae1c24c3c",
                "e929b1d790ab49968ed8e34648553df4"
              ],
              labels: [2, 3, 4],
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
              attachments: [
                {
                  name: "sky-life.jpg",
                  size: "1.2 MB",
                  url: "/assets/images/sq-11.jpg"
                }
              ],
              comments: [
                {
                  id: shortId.generate(),
                  uid: "e929b1d790ab49968ed8e34648553df4",
                  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                  time: new Date()
                }
              ]
            },
            {
              id: shortId.generate(),
              title: "Nested DnD",
              coverImage: "/assets/images/sq-13.jpg",
              members: [
                "323sa680b3249760ea21rt47",
                "7863a6802ez0e277a0f98534",
                "14663a3406eb47ffa63d4fec9429cb71",
                "43bd9bc59d164b5aea498e3ae1c24c3c",
                "e929b1d790ab49968ed8e34648553df4"
              ],
              labels: [2, 3, 4],
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
              attachments: [
                {
                  name: "sky-life.jpg",
                  size: "1.2 MB",
                  url: "/assets/images/sq-11.jpg"
                }
              ],
              comments: [
                {
                  id: shortId.generate(),
                  uid: "e929b1d790ab49968ed8e34648553df4",
                  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                  time: new Date()
                }
              ]
            }
          ]
        }
      ],
      members: [
        // only member id
        "323sa680b3249760ea21rt47",
        "7863a6802ez0e277a0f98534",
        "14663a3406eb47ffa63d4fec9429cb71",
        "43bd9bc59d164b5aea498e3ae1c24c3c",
        "e929b1d790ab49968ed8e34648553df4"
      ]
    },
    {
      id: "c5d7498bbcb84d81fc72168871ac6a6e",
      title: "Matx Angular",
      list: [
        {
          id: shortId.generate(),
          title: "Drag and Drop",
          cardList: [
            {
              id: shortId.generate(),
              title: "Beautiful DnD",
              coverImage: "/assets/images/sq-9.jpg",
              members: [
                "323sa680b3249760ea21rt47",
                "7863a6802ez0e277a0f98534",
                "14663a3406eb47ffa63d4fec9429cb71",
                "43bd9bc59d164b5aea498e3ae1c24c3c",
                "e929b1d790ab49968ed8e34648553df4"
              ],
              labels: [2, 3, 4],
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever s",
              attachments: [
                {
                  name: "sky-life.jpg",
                  size: "1.2 MB",
                  url: "/assets/images/sq-11.jpg"
                }
              ],
              comments: [
                {
                  id: shortId.generate(),
                  uid: "e929b1d790ab49968ed8e34648553df4",
                  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                  time: new Date()
                }
              ]
            },
            {
              id: shortId.generate(),
              title: "Nested DnD",
              coverImage: "/assets/images/sq-11.jpg",
              members: [
                "323sa680b3249760ea21rt47",
                "7863a6802ez0e277a0f98534",
                "14663a3406eb47ffa63d4fec9429cb71",
                "43bd9bc59d164b5aea498e3ae1c24c3c",
                "e929b1d790ab49968ed8e34648553df4"
              ],
              labels: [2, 3, 4],
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever s",
              attachments: [
                {
                  name: "sky-life.jpg",
                  size: "1.2 MB",
                  url: "/assets/images/sq-9.jpg"
                },
                {
                  name: "stair.jpg",
                  size: "2.8 MB",
                  url: "/assets/images/sq-11.jpg"
                }
              ],
              comments: [
                {
                  id: shortId.generate(),
                  uid: "e929b1d790ab49968ed8e34648553df4",
                  text:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                  time: new Date()
                }
              ]
            }
          ]
        }
      ],
      members: [
        // only member id
        "323sa680b3249760ea21rt47",
        "7863a6802ez0e277a0f98534",
        "14663a3406eb47ffa63d4fec9429cb71",
        "43bd9bc59d164b5aea498e3ae1c24c3c",
        "e929b1d790ab49968ed8e34648553df4"
      ]
    }
  ],

  labels: [
    {
      id: 1,
      title: "Active",
      color: "primary"
    },
    {
      id: 2,
      title: "Complete",
      color: "green"
    },
    {
      id: 3,
      title: "Ready",
      color: "secondary"
    },
    {
      id: 4,
      title: "High Priority",
      color: "error"
    }
  ],

  members: [
    {
      id: "1",
      name: "John Doe",
      avatar: "/assets/images/face-7.jpg"
    },
    {
      id: "323sa680b3249760ea21rt47",
      name: "Frank Powell",
      avatar: "/assets/images/faces/13.jpg"
    },
    {
      id: "7863a6802ez0e277a0f98534",
      name: "John Doe",
      avatar: "/assets/images/face-1.jpg"
    },
    {
      id: "14663a3406eb47ffa63d4fec9429cb71",
      name: "Betty Diaz",
      avatar: "/assets/images/faces/12.jpg"
    },
    {
      id: "43bd9bc59d164b5aea498e3ae1c24c3c",
      name: "Brian Stephens",
      avatar: "/assets/images/faces/3.jpg"
    },
    {
      id: "3fc8e01f3ce649d1caf884fbf4f698e4",
      name: "Jacqueline Day",
      avatar: "/assets/images/faces/16.jpg"
    },
    {
      id: "e929b1d790ab49968ed8e34648553df4",
      name: "Arthur Mendoza",
      avatar: "/assets/images/faces/10.jpg"
    },
    {
      id: "d6caf04bba614632b5fecf91aebf4564",
      name: "Jeremy Lee",
      avatar: "/assets/images/faces/9.jpg"
    },
    {
      id: "be0fb188c8e242f097fafa24632107e4",
      name: "Johnny Newman",
      avatar: "/assets/images/faces/5.jpg"
    },
    {
      id: "dea902191b964a68ba5f2d93cff37e13",
      name: "Jeffrey Little",
      avatar: "/assets/images/faces/15.jpg"
    },
    {
      id: "0bf58f5ccc4543a9f8747350b7bda3c7",
      name: "Barbara Romero",
      avatar: "/assets/images/faces/4.jpg"
    },
    {
      id: "c5d7498bbcb84d81fc72168871ac6a6e",
      name: "Daniel James",
      avatar: "/assets/images/faces/2.jpg"
    },
    {
      id: "97bfbdd9413e46efdaca2010400fe18c",
      name: "Alice Sanders",
      avatar: "/assets/images/faces/17.jpg"
    }
  ]
};

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// Moves an item from one list to another list.
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const getBoardWithMemberDetails = board => {
  const members = board.members.map(id => {
    return ScrumBoardDB.members.find(member => member.id === id);
  });
  return { ...board, members };
};

Mock.onGet("/api/scrum-board/all-member").reply(config => {
  return [200, [...ScrumBoardDB.members]];
});

Mock.onGet("/api/scrum-board/all-label").reply(config => {
  return [200, [...ScrumBoardDB.labels]];
});

Mock.onGet("/api/scrum-board/all-board").reply(config => {
  const response = ScrumBoardDB.boardList.map(board =>
    _.pick(board, ["id", "title"])
  );

  return [200, response];
});

Mock.onPost("/api/scrum-board/add-board").reply(config => {
  let title = config.data;
  ScrumBoardDB.boardList.push({
    id: shortId.generate(),
    title,
    list: [],
    members: []
  });

  const response = ScrumBoardDB.boardList.map(board =>
    _.pick(board, ["id", "title"])
  );

  return [200, response];
});

Mock.onGet("/api/scrum-board").reply(config => {
  const id = config.data;

  const board = ScrumBoardDB.boardList.find(board => board.id === id);

  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onGet("/api/scrum-board").reply(config => {
  const id = config.data;

  const board = ScrumBoardDB.boardList.find(board => board.id === id);

  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onPost("/api/scrum-board/add-member").reply(config => {
  let { boardId, memberId } = JSON.parse(config.data);
  const board = ScrumBoardDB.boardList.find(board => board.id === boardId);

  board.members.push(memberId);
  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onPost("/api/scrum-board/delete-member").reply(config => {
  let { boardId, memberId } = JSON.parse(config.data);

  const board = ScrumBoardDB.boardList.find(board => board.id === boardId);
  board.members.splice(board.members.indexOf(memberId), 1);

  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onPost("/api/scrum-board/add-column").reply(config => {
  let { boardId, listTitle } = JSON.parse(config.data);

  const board = ScrumBoardDB.boardList.find(board => board.id === boardId);
  board.list.push({
    id: shortId.generate(),
    title: listTitle,
    cardList: []
  });

  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onPost("/api/scrum-board/rename-column").reply(config => {
  let { boardId, listTitle, listId } = JSON.parse(config.data);

  const board = ScrumBoardDB.boardList.find(board => board.id === boardId);
  board.list.map(column => {
    if (column.id === listId) {
      column.title = listTitle;
    }
    return column;
  });

  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onPost("/api/scrum-board/delete-column").reply(config => {
  let { boardId, listId } = JSON.parse(config.data);

  const board = ScrumBoardDB.boardList.find(board => board.id === boardId);
  let deleteIndex = null;

  board.list.map((column, index) => {
    if (column.id === listId) deleteIndex = index;
  });

  board.list.splice(deleteIndex, 1);

  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onPost("/api/scrum-board/add-card").reply(config => {
  let { boardId, cardTitle, listId } = JSON.parse(config.data);

  let board = ScrumBoardDB.boardList.find(board => board.id === boardId);
  let column = board.list.find(column => column.id === listId);

  column.cardList.push({
    id: shortId.generate(),
    title: cardTitle,
    members: [],
    labels: [],
    comments: [],
    attachments: []
  });

  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onPost("/api/scrum-board/update-card").reply(config => {
  let { boardId, listId, card } = JSON.parse(config.data);

  let boardList = ScrumBoardDB.boardList.map(board => {
    if (board.id === boardId) {
      return {
        ...board,
        list: board.list.map(column => {
          if (column.id === listId) {
            return {
              ...column,
              cardList: column.cardList.map(item => {
                if (item.id === card.id) {
                  return { ...card };
                }
                return { ...item };
              })
            };
          }
          return column;
        })
      };
    }
    return board;
  });

  ScrumBoardDB.boardList = [...boardList];

  let board = boardList.find(item => item.id === boardId);

  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onPost("/api/scrum-board/reorder-list").reply(config => {
  let { boardId, startIndex, endIndex } = JSON.parse(config.data);

  ScrumBoardDB.boardList = ScrumBoardDB.boardList.map(board => {
    if (board.id === boardId) {
      return {
        ...board,
        list: reorder(board.list, startIndex, endIndex)
      };
    }
    return board;
  });

  let board = ScrumBoardDB.boardList.find(item => item.id === boardId);
  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onPost("/api/scrum-board/reorder-card").reply(config => {
  let { boardId, listId, startIndex, endIndex } = JSON.parse(config.data);

  ScrumBoardDB.boardList = ScrumBoardDB.boardList.map(board => {
    if (board.id === boardId) {
      return {
        ...board,
        list: board.list.map(list => {
          if (list.id === listId) {
            return {
              ...list,
              cardList: reorder(list.cardList, startIndex, endIndex)
            };
          }
          return list;
        })
      };
    }
    return board;
  });

  let board = ScrumBoardDB.boardList.find(board => board.id === boardId);
  const response = getBoardWithMemberDetails(board);

  return [200, response];
});

Mock.onPost("/api/scrum-board/move-card").reply(config => {
  let {
    boardId,
    sourcelistId,
    destinationlistId,
    source,
    destination
  } = JSON.parse(config.data);
  let board = ScrumBoardDB.boardList.find(board => board.id === boardId);

  let [movedItem] = board.list
    .find(list => list.id === sourcelistId)
    .cardList.splice(source.index, 1);

  board.list
    .find(list => list.id === destinationlistId)
    .cardList.splice(destination.index, 0, movedItem);

  const response = getBoardWithMemberDetails(board);

  return [200, response];
});
