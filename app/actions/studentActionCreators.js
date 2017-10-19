import axios from 'axios';

export const GET_STUDENTS = 'GET_STUDENTS';

export const loadStudents = () => dispatch => {
  axios.get('/api/student/')
  .then(response => response.data)
  .then(data => {
    dispatch({type: GET_STUDENTS, payload: data });
  })
  .catch(error => console.log(error));
};
