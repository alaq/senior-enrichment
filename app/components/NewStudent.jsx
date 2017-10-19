import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStudent } from '../actions/campusActionCreators';

class NewStudent extends Component {

  render() {
    const { campuses } = this.props;
    return (
      <div>
        <li><label>Name</label><input type="text" /></li>
        <li><label>Email</label><input type="text" /></li>
        <li>
          <label>Campus</label>
          <select>
            {campuses.map(campus => {
              return (
                <option key={campus.id} value={campus.id} >{campus.id} - {campus.name}</option>
              )
            })}
          </select>
          <button type="submit">Save new student</button>
        </li>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => ({
  // fetchStudents: () => dispatch(loadStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);
