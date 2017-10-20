import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newStudent } from '../actions/studentActionCreators';

class NewStudent extends Component {

  constructor(props){
    super(props);
    this.onStudentSubmit = this.onStudentSubmit.bind(this);
  }

  onStudentSubmit (e) {
    e.preventDefault();
    const newStudent = {
      name: e.target.name.value,
      email: e.target.email.value,
      campusId: e.target.campusId.value
    }
    this.props.addStudent(newStudent);
  }

  render() {
    const { campuses } = this.props;
    return (
      <form onSubmit={this.onStudentSubmit}>
        <li><label>Name</label><input name="name" type="text" /></li>
        <li><label>Email</label><input name="email" type="text" /></li>
        <li>
          <label>Campus</label>
          <select name="campusId">
            {campuses.map(campus => {
              return (
                <option key={campus.id} value={campus.id} >{campus.id} - {campus.name}</option>
              )
            })}
          </select>
          <button type="submit">Save new student</button>
        </li>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => ({
  // fetchStudents: () => dispatch(loadStudents())
  addStudent: (student) => dispatch(newStudent(student))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);
