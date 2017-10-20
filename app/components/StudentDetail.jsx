import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadStudent, removeStudent, updateStudent, editStudent } from '../actions/studentActionCreators';

class StudentDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      student: {
        name: '',
        id: '',
        email: '',
        campusId: ''
      },
      isEditOn: false
    };
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCampus = this.onChangeCampus.bind(this);
    this.onSubmitDelete = this.onSubmitDelete.bind(this);
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

  handleClickEdit () {
    this.setState(prevState => (
      {
        isEditOn: !prevState.isEditOn
    }));

    console.log(this.state);

    if (!this.state.idEditOn)  {
      console.log(this.state.student);
      this.props.editStudent(this.state.student);
    }

  }

  onChangeName (e) {
      this.setState({
        student: {
          name: e.target.value,
          email: this.state.student.email,
          id: this.state.student.id,
          campusId: this.state.campusId
        }
      }
    );
  }

  onChangeEmail (e) {
      this.setState({
        student: {
          email: e.target.value,
          name: this.state.student.name,
          id: this.state.student.id,
          campusId: this.state.campusId
        }
      }
    )
  }

  onChangeCampus (e) {
      this.setState({
        student: {
          campusId: e.target.value,
          email: this.state.student.email,
          name: this.state.student.name,
          id: this.state.student.id
        }
      }
    )
  }

  onSubmitDelete (e) {
    // console.dir(e.target.value);
    this.props.deleteStudent(e.target.value);
    this.props.history.push('/');
  }

  render () {
    const student = this.state.student;
    const campus = this.props.campus;
    const campuses = this.props.campuses;
    return (
      <div>
        <ul>
          {this.state.isEditOn ?
          <div>
            <li><input type="text" onChange={this.onChangeName} value={student.name} /></li>
            <li><input type="text" onChange={this.onChangeEmail} value={student.email} /></li>
            <li>
              <select onChange={this.onChangeCampus} value={student.campusId}>
                { campuses.map(campus => {
                  return (
                    <option value={campus.id} >{campus.id} - {campus.name}</option>
                  )
                })}
              </select>
            </li>
          </div> :
          <div>
            <li>Name: {student.name}</li>
            <li>Email: {student.email}</li>
            <li>Campus ID: {student.campusId}</li>
          </div>
          }
          <button onClick={this.handleClickEdit}>{this.state.isEditOn ? 'Save Edits' : 'Edit Details'}</button>
        </ul>
        <hr />
        { campus &&
          <div>
            <ul>
              <li>Campus name: {campus.name}</li>
              <li>Campus ID: {campus.id}</li>
              <Link to={`/campus/${campus.id}`}>Go to Campus</Link><br />
              <button value={student.id} onClick={this.onSubmitDelete}>Delete Student</button>
            </ul>
          </div>
      }
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state, ownProps) => {
  console.log(state);
  const student = state.students.find(aStudent => aStudent.id === +ownProps.match.params.studentId);
  const campuses = state.campuses;
  const isEditOn = state.isEditOn;
  const campus = state.campuses.find(theCampus => theCampus.id === student.campusId);
  const studentId = ownProps.studentId;
  return { student, campus, campuses, isEditOn, ownProps };
};

const mapDispatch = (dispatch, ownProps) => {
  return {

    fetchStudentDetail: () => {
      const studentId = ownProps.match.params.studentId;
      dispatch(loadStudent(studentId));
    },

    deleteStudent: () => {
      const studentId = ownProps.match.params.studentId;
      dispatch(removeStudent(studentId));
    },

    editStudent: (student) => {
      // const studentId = ownProps.match.params.studentId;
      dispatch(updateStudent(student));
    }

  };
};

export default connect(mapState, mapDispatch)(StudentDetail);
