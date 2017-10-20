import axios from 'axios';

export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENT = 'GET_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const NEW_STUDENT = 'NEW_STUDENT';

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

export const removeStudent = (studentId) => dispatch => {
  axios.delete('/api/student/' + studentId)
  .then(response => response.data)
  .then(data => {
    dispatch({type: REMOVE_STUDENT, payload: data });
  })
  .catch(error => console.log(error));
};

export const updateStudent = (student) => dispatch => {
  axios.put('/api/student/' + student.id, {student})
  .then(response => response.data)
  .then(data => {
    console.log('response from backend', data);
    dispatch({type: UPDATE_STUDENT, payload: data });
  })
  .catch(error => console.log(error));
};

export const newStudent = (student) => dispatch => {
  axios.post('/api/student/', {student})
    .then(response => response.data)
    .then(data => {
      dispatch({type: NEW_STUDENT, payload: data });
    })
    .catch(error => console.log(error));
};
