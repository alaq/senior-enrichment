import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers'; // I want to break up the reducers
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import { GET_CAMPUSES } from './actions/campusActionCreators';
import { GET_STUDENTS } from './actions/studentActionCreators';

const initialState = {
  campuses: [],
  students: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, {campuses: action.payload});

    case GET_STUDENTS:
      return Object.assign({}, state, {students: action.payload});

      case GET_STUDENTS_OF_CAMPUS:
      return Object.assign({}, state, {students: action.payload});

    default:
      return state;
  }

};


export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));
