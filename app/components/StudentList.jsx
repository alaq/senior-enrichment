import React, { Component } from 'react';
import StudentItem from './StudentItem';
import NewStudent from './NewStudent';
import { connect } from 'react-redux';

import { loadStudents } from '../actions/studentActionCreators';

class StudentList extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.students.length !== this.props.students.length) {
      this.props.fetchStudents();
    }
  }

  render () {
    const { students } = this.props;
    return (
      <div>
          <h2>List of students ({students.length})</h2>
          {students && students.map(student => <StudentItem key={student.id} student={student} />)}
          <hr />
          <h2>New Student</h2>
          <NewStudent />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    students: state.students
  });

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => dispatch(loadStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
