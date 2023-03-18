import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const Mock = new MockAdapter(axios);
export default Mock;
