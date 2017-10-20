import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCampus, removeCampus, updateCampus } from '../actions/campusActionCreators';
import CampusList from './CampusList';
import StudentList from './StudentList';

class CampusDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      isEditOn: false
    }
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.onSubmitDelete = this.onSubmitDelete.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
  }


  componentDidMount () {
    // here will go the function to fetch the campus details
    this.props.fetchCampusDetail();
  }

  componentWillReceiveProps (newProps) {

    if (newProps.match.params.campusId !== this.props.match.params.campusId) {
      this.props.fetchCampusDetail();
    }

    this.setState({
      campus: newProps.campus
    });

  }

  handleClickEdit () {
    this.setState(prevState => (
      {
        isEditOn: !prevState.isEditOn
    }));


    if (!this.state.idEditOn)  {
      this.props.editCampus(this.state.campus);
    }

  }

  onChangeName (e) {
    // console.log(this.state.campus)
    const newState = this.state.campus;
    newState.name = e.target.value;
      this.setState({
        campus: newState
      }
    );
  }

  onChangeImage (e) {
    const newState = this.state.campus;
    newState.image = e.target.value;
      this.setState({
        campus: newState
      }
    );
  }

  onSubmitDelete (e) {
    // console.dir(e.target.value);
    console.log(this.props);
    this.props.deleteCampus(e.target.value);
    this.props.history.push('/');
  }

  render () {
    const campus = this.props.campus;
    const studentsOfCampus = this.props.studentsOfCampus;
    return (

      <div>
        <ul>
          {this.state.isEditOn ?
          <div>
            <li><input type="text" onChange={this.onChangeName} value={campus.name} /></li>
            <li><input type="text" onChange={this.onChangeImage} value={campus.image} /></li>
          </div> :
          <div>
            <img src={`${campus.image}`} />
            <li>Name: {campus.name}</li>
            <li>ID: {campus.id}</li>
          </div>
          }
          <button onClick={this.handleClickEdit}>{this.state.isEditOn ? 'Save Edits' : 'Edit Details'}</button>
        </ul>
        <hr />
        <h2>Students of {campus.name}</h2>
        <ul>
        {studentsOfCampus.map(student => {
          return <li key={student.id}><Link key={student.id} to={`/student/${student.id}`}>{student.name}</Link></li>
        })}
        </ul>
        <hr />
        <button value={campus.id} onClick={this.onSubmitDelete}>Delete Campus</button>
       
      </div>

          // <div>
          // <img src={`${campus.image}`} />
          // { campus &&
          // <ul>
          //   <li>Name: {campus.name}</li>
          //   <li>ID: {campus.id}</li>
          // </ul> }
          // </div>




    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state, ownProps) => {
  console.log('mapstate prop', ownProps);
  const campuses = state.campuses;
  const students = state.students;
  const isEditOn = state.isEditOn;
  const campusId = +ownProps.match.params.campusId;
  const studentsOfCampus = students.filter(student => {
    return student.campusId === campusId;
  });
  const campus = campuses.find(aCampus => aCampus.id === +ownProps.match.params.campusId);
  return {students, studentsOfCampus, campuses, isEditOn, campus, ownProps};
};

const mapDispatch = (dispatch, ownProps) => {
  return {

    fetchCampusDetail: () => {
      const campusId = ownProps.match.params.campusId;
      dispatch(loadCampus(campusId));
    },

    deleteCampus: () => {
      const campusId = ownProps.match.params.campusId;
      dispatch(removeCampus(campusId));
    },

    editCampus: (campus) => {
      // const studentId = ownProps.match.params.studentId;
      dispatch(updateCampus(campus));
    },

    addCampus: (campus) => {
      dispatch(newCampus(campus));
    }

  };
};

export default connect(mapState, mapDispatch)(CampusDetail);
