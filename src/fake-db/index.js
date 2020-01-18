import Mock from "./mock";

import "./db/invoice";
import "./db/calendarEvents";
import "./db/users";
import "./db/inbox";
import "./db/chat";
import "./db/todos";
import "./db/list";
import "./db/scrumBoard";
import "./db/notification";
import "./db/ecommerce";

Mock.onAny().passThrough();
