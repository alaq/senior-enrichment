import axios from 'axios';

export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_CAMPUS = 'GET_CAMPUS';
export const NEW_CAMPUS = 'NEW_CAMPUS';
export const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
export const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

export const loadCampuses = () => dispatch => {
  axios.get('/api/campus/')
  .then(response => response.data)
  .then(data => {
    dispatch({type: GET_CAMPUSES, payload: data });
  })
  .catch(error => console.log(error));
};

export const loadCampus = (id) => dispatch => {
  axios.get('/api/campus/' + id)
  .then(response => response.data)
  .then(data => {
    dispatch({type: GET_CAMPUS, payload: data });
  })
  .catch(error => console.log(error));
};

export const removeCampus = (campusId) => dispatch => {
  axios.delete('/api/campus/' + campusId)
  .then(response => response.data)
  .then(data => {
    dispatch({type: REMOVE_CAMPUS, payload: data });
  })
  .catch(error => console.log(error));
};

export const updateCampus = (campus) => dispatch => {
  axios.put('/api/campus/' + campus.id, {campus})
  .then(response => response.data)
  .then(data => {
    console.log('response from backend', data);
    dispatch({type: UPDATE_CAMPUS, payload: data });
  })
  .catch(error => console.log(error));
};

export const newCampus = (campus) => dispatch => {
  axios.post('/api/campus/', {campus})
    .then(response => response.data)
    .then(data => {
      dispatch({type: NEW_CAMPUS, payload: data });
    })
    .catch(error => console.log(error));
};

