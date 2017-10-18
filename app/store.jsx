import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import { GET_CAMPUSES } from './actions/studentActionCreators';

const initialState = {
  campuses: [],
  isEmpty: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      const newState = Object.assign({}, state, {campuses: action.payload})
      return newState;

    default:
      return state;
  }

};


export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));
