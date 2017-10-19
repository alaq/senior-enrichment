import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStudent } from '../actions/studentActionCreators';

class StudentDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      student: {
        name: '',
        id: '',
        email: ''
      }
    }
  }

  componentDidMount () {
    // here will go the function to fetch the student details
    this.props.fetchStudentDetail();
  }

  componentWillReceiveProps (newProps) {

    if (newProps.match.params.studentId !== this.props.match.params.studentId) {
      this.props.fetchStudentDetail();
    }

    this.setState({
      student: newProps.student
    });

  }

  render () {
    const student = this.state.student;
    console.log(student);
    return (
      <ul>
        <li>Name: {student.name}</li>
        <li>Email: {student.email}</li>
      </ul>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students, campuses }, ownProps) => {
  const student = students.find(aStudent => aStudent.id === +ownProps.match.params.studentId);
  const studentId = ownProps.studentId;
  return { student, campuses, ownProps };
};

const mapDispatch = (dispatch, ownProps) => {
  return {

    fetchStudentDetail: () => {
      const studentId = ownProps.match.params.studentId;
      dispatch(loadStudent(studentId));
    }

  };
};

export default connect(mapState, mapDispatch)(StudentDetail);
