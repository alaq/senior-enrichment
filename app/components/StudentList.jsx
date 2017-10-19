import React, { Component } from 'react';
import StudentItem from './StudentItem';
import NewStudent from './NewStudent';
import { connect } from 'react-redux';

import { loadStudents } from '../actions/studentActionCreators';

class StudentList extends Component {

  componentDidMount() {
    this.props.fetchStudents(this.props.campusId);
  }

  render () {
    const { students } = this.props;
    return (
      <div>
          {students && students.map(student => <StudentItem key={student.id} student={student} />)}
          <h2>New Student</h2>
          <NewStudent />
      </div>
    );
  }
}

const mapStateToProps = (state) =>
  {
    const students = state.students;
    return {students, state};
  };

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => dispatch(loadStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
