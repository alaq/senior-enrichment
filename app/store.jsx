import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers'; // I want to break up the reducers
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import { GET_CAMPUSES, GET_CAMPUS, NEW_CAMPUS, REMOVE_CAMPUS, UPDATE_CAMPUS } from './actions/campusActionCreators';
import { GET_STUDENTS, GET_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT, NEW_STUDENT } from './actions/studentActionCreators';

const initialState = {
  campuses: [],
  students: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    // CAMPUSES
    case GET_CAMPUSES:
      return Object.assign({}, state, {campuses: action.payload});

    case GET_CAMPUS:
    return Object.assign({}, state, {campuses: state.campuses.map(campus => (
        action.payload.id === campus.id ? action.payload : campus
      ))});

    case NEW_CAMPUS:
      return Object.assign({}, state, {campuses: [action.payload, ...state.campuses]});

    case REMOVE_CAMPUS:
      console.log(action.payload.id);
      return Object.assign({}, state, {campuses: state.campuses.filter(campus => campus.id !== action.payload.id)});

      case UPDATE_CAMPUS:
      return state.campus.map(campus => (
        action.payload.campus.id === campus.id ? action.payload.campus : campus
      ));

    // STUDENTS
    case GET_STUDENTS:
      return Object.assign({}, state, {students: action.payload});

    case GET_STUDENT:
      return Object.assign({}, state, {students: state.students.map(student => (
        action.payload.id === student.id ? action.payload : student
      ))});

    case UPDATE_STUDENT:
      console.log(state);
      return state.students.map(student => (
        action.payload.student.id === student.id ? action.payload.student : student
      ));

    case REMOVE_STUDENT:
      return Object.assign({}, state, {students: state.students.filter(student => student.id !== action.payload.id)});

    case NEW_STUDENT:
      return Object.assign({}, state, {students: [action.payload, ...state.students]});


    default:
      return state;
  }

};


export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));
