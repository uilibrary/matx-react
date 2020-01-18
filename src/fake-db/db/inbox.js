import Mock from "../mock";
import shortid from "shortid";

const inboxDB = {
  messages: [
    {
      id: shortid.generate(),
      sender: {
        name: "Henrik Gevorg",
        photo: "assets/images/face-1.jpg"
      },
      date: new Date("1/25/2018"),
      selected: false,
      subject: "Welcome to Matx React Admin",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
              Thanks<br>
              Jhone`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Gevorg Spartak",
        photo: "assets/images/face-2.jpg"
      },
      date: new Date("4/3/2017"),
      selected: false,
      subject: "Confirm your email address",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote><br>
              Thanks<br>
              Mark`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Petros Toros",
        photo: "assets/images/face-3.jpg"
      },
      date: new Date("1/20/2017"),
      selected: false,
      subject: "New order informations",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
              Thanks<br>
              Jhone`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Henrik Gevorg",
        photo: "assets/images/face-1.jpg"
      },
      date: new Date("1/8/2017"),
      selected: false,
      subject: "Welcome to Matx React Admin",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
              Thanks<br>
              Jhone`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Gevorg Spartak",
        photo: "assets/images/face-2.jpg"
      },
      date: new Date("10/3/2016"),
      selected: false,
      subject: "Confirm your email address",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote><br>
              Thanks<br>
              Mark`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Petros Toros",
        photo: "assets/images/face-4.jpg"
      },
      date: new Date("10/3/2015"),
      selected: false,
      subject: "New order informations",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
              Thanks<br>
              Jhone`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Henrik Gevorg",
        photo: "assets/images/face-1.jpg"
      },
      date: new Date("10/3/2015"),
      selected: false,
      subject: "Welcome to Matx React Admin",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
              Thanks<br>
              Jhone`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Gevorg Spartak",
        photo: "assets/images/face-2.jpg"
      },
      date: new Date("10/3/2015"),
      selected: false,
      subject: "Confirm your email address",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote><br>
              Thanks<br>
              Mark`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Petros Toros",
        photo: "assets/images/face-4.jpg"
      },
      date: new Date("10/3/2015"),
      selected: false,
      subject: "New order informations",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
              Thanks<br>
              Jhone`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Gevorg Spartak",
        photo: "assets/images/face-2.jpg"
      },
      date: new Date("10/3/2015"),
      selected: false,
      subject: "Confirm your email address",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote><br>
              Thanks<br>
              Mark`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Petros Toros",
        photo: "assets/images/face-4.jpg"
      },
      date: new Date("10/3/2015"),
      selected: false,
      subject: "New order informations",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
              Thanks<br>
              Jhone`
    },
    {
      id: shortid.generate(),
      sender: {
        name: "Gevorg Spartak",
        photo: "assets/images/face-2.jpg"
      },
      date: new Date("10/3/2012"),
      selected: false,
      subject: "Confirm your email address",
      message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote>
              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
              <blockquote>
              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
              temporibus vero possimus error voluptates sequi.
              </blockquote><br>
              Thanks<br>
              Mark`
    }
  ]
};

Mock.onGet("/api/inbox/all").reply(config => {
  return [200, inboxDB.messages];
});

Mock.onGet("/api/inbox").reply(config => {
  const id = config.data;
  const response = inboxDB.messages.find(message => message.id === id);
  return [200, response];
});

Mock.onPost("/api/inbox/delete").reply(config => {
  let message = JSON.parse(config.data);
  let index = { i: 0 };
  inboxDB.messages.forEach(element => {
    if (element.id === message.id) {
      return [200, inboxDB.messages.splice(index.i, 1)];
    }
    index.i++;
  });
  return [200, inboxDB.messages];
});

Mock.onPost("/api/inbox/update").reply(config => {
  let message = JSON.parse(config.data);
  let index = { i: 0 };
  inboxDB.messages.forEach(element => {
    if (element.id === message.id) {
      inboxDB.messages[index.i] = message;
      return [200, inboxDB.messages];
    }
    index.i++;
  });
  return [200, inboxDB.messages];
});

Mock.onPost("/api/inbox/add").reply(config => {
  let message = JSON.parse(config.data);
  inboxDB.messages.push(message);
  return [200, inboxDB.messages];
});
