import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers'; // I want to break up the reducers
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import { GET_CAMPUSES, GET_CAMPUS, NEW_CAMPUS, REMOVE_CAMPUS } from './actions/campusActionCreators';
import { GET_STUDENTS, GET_STUDENT, GET_STUDENTS_OF_CAMPUS } from './actions/studentActionCreators';

const initialState = {
  campuses: [],
  students: []
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
      return Object.assign({}, state, {campuses: state.campuses.filter(campus => campus.campusId !== action.payload.campusId)});

    // STUDENTS
    case GET_STUDENTS:
      return Object.assign({}, state, {students: action.payload});
    
    case GET_STUDENT:
      return Object.assign({}, state, {students: state.students.map(student => (
        action.payload.id === student.id ? action.payload : student
      ))});

    

    default:
      return state;
  }

};


export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));
