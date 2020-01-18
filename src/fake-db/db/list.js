import Mock from "../mock";

const ListDB = {
  list: [
    {
      id: 1,
      email: "uilib@gmail.com",
      userName: "ui lib",
      projectName: "Matx development",
      date: new Date().toLocaleString(),
      projectImage: "/assets/images/products/headphone-2.jpg",
      userImage: "/assets/images/face-1.jpg",
      comment: 0,
      revision: 5
    },
    {
      id: 2,
      email: "uilib@gmail.com",
      userName: "ui lib",
      projectName: "Matx development",
      date: new Date().toLocaleString(),
      projectImage: "/assets/images/products/headphone-2.jpg",
      userImage: "/assets/images/face-1.jpg",
      comment: 0,
      revision: 5
    },
    {
      id: 3,
      email: "uilib@gmail.com",
      userName: "ui lib",
      projectName: "Matx development",
      date: new Date().toLocaleString(),
      projectImage: "/assets/images/products/headphone-3.jpg",
      userImage: "/assets/images/face-1.jpg",
      comment: 0,
      revision: 5
    },
    {
      id: 5,
      email: "uilib@gmail.com",
      userName: "ui lib",
      projectName: "Gull development",
      date: new Date().toLocaleString(),
      projectImage: "/assets/images/products/headphone-2.jpg",
      userImage: "/assets/images/face-1.jpg",
      comment: 0,
      revision: 5
    },
    {
      id: 6,
      email: "uilib@gmail.com",
      userName: "ui lib",
      projectName: "Evalynn development",
      date: new Date().toLocaleString(),
      projectImage: "/assets/images/products/iphone-1.jpg",
      userImage: "/assets/images/face-1.jpg",
      comment: 0,
      revision: 5
    },
    {
      id: 7,
      email: "uilib@gmail.com",
      userName: "ui lib",
      projectName: "Dexum development",
      date: new Date().toLocaleString(),
      projectImage: "/assets/images/products/headphone-2.jpg",
      userImage: "/assets/images/face-1.jpg",
      comment: 0,
      revision: 5
    },
    {
      id: 8,
      email: "uilib@gmail.com",
      userName: "ui lib",
      projectName: "Matx development",
      date: new Date().toLocaleString(),
      projectImage: "/assets/images/products/headphone-3.jpg",
      userImage: "/assets/images/face-1.jpg",
      comment: 0,
      revision: 5
    },
    {
      id: 9,
      email: "uilib@gmail.com",
      userName: "ui lib",
      projectName: "Matx development",
      date: new Date().toLocaleString(),
      projectImage: "/assets/images/products/headphone-3.jpg",
      userImage: "/assets/images/face-1.jpg",
      comment: 0,
      revision: 5
    }
  ]
};

Mock.onGet("/api/list/all").reply(config => {
  const response = ListDB.list;
  return [200, response];
});
