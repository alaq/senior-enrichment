import axios from 'axios';

export const GET_CAMPUSES = 'GET_CAMPUSES';

export const loadCampuses = () => dispatch => {
  axios.get('/api/campus/')
  .then(response => response.data)
  .then(data => {
    dispatch({type: GET_CAMPUSES, payload: data });
  })
  .catch(error => console.log(error));
};
