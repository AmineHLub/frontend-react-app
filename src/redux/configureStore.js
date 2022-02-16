import { createStore, applyMiddleware } from 'redux';
import Axios from 'axios';
import thunk from 'redux-thunk';

const initialState = '';

const GET_MSG_API = 'GET_MSG_API';

const baseUrl = 'http://127.0.0.1:3000/v1/greetings';

export const getMessages = () => async (dispatch) => {
  const response = await Axios.get(baseUrl);
  const messageObj = { message: response.data.greeting };
  dispatch({
    type: GET_MSG_API,
    payload: messageObj,
  });
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MSG_API:
      return action.payload;
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}
