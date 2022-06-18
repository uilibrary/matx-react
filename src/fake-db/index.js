import Mock from './mock';

import './db/auth';
import './db/ecommerce';
import './db/notification';

Mock.onAny().passThrough();
