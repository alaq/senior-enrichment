import axios from 'axios';

export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENT = 'GET_STUDENT';
export const REMOVE_STUDENTS = 'DELETE_STUDENT';

export const loadStudents = () => dispatch => {
  axios.get('/api/student/')
  .then(response => response.data)
  .then(data => {
    dispatch({type: GET_STUDENTS, payload: data });
  })
  .catch(error => console.log(error));
};

export const loadStudent = (id) => dispatch => {
  axios.get('/api/student/' + id)
  .then(response => response.data)
  .then(data => {
    dispatch({type: GET_STUDENT, payload: data });
  })
  .catch(error => console.log(error));
};

export const deleteStudent = (studentId) => dispatch => {
  axios.delete('/api/student/' + studentId)
  .then(response => response.data)
  .then(data => {
    dispatch({type: GET_STUDENTS, payload: data });
  })
  .catch(error => console.log(error));
};
// THIS NEEDS TO BE COMPLETED WITH THE CORRECT RESPONSE