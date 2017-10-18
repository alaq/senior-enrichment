import axios from 'axios';

export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENTS_WITH_CAMPUS_ID = 'GET_STUDENTS_WITH_CAMPUS_ID';

export const loadStudents = () => dispatch => {
  axios.get('/api/students/')
  .then(response => response.data)
  .then(data => {
    dispatch({type: GET_STUDENTS, payload: data });
  })
  .catch(error => console.log(error));
};

export const loadStudentsWithCampusId = (campusId) => dispatch => {
  axios.get('/api/students/')
  .then(response => response.data)
  .then(data => {
    dispatch({type: GET_STUDENTS_WITH_CAMPUS_ID, payload: data });
  })
  .catch(error => console.log(error));
};
