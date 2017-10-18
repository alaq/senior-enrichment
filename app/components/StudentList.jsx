import React, { Component } from 'react';
import StudentItem from './StudentItem';
import { connect } from 'react-redux';

import { loadStudents } from '../actions/studentActionCreators';

class StudentList extends Component {

  componentDidMount() {
    this.props.fetchStudents();
  }

  render () {
    const { students } = this.props;
    return (
      <div>
          <h1>List of students</h1>
          {students && students.map(student => <StudentItem key={student.id} student={student} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  students: state.students,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => dispatch(loadStudents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
