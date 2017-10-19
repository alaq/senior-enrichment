import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCampus, removeCampus } from '../actions/campusActionCreators';
import CampusList from './CampusList';
import StudentList from './StudentList';

class CampusDetail extends Component {

  constructor(props){
    super(props);
    this.onSubmitDelete = this.onSubmitDelete.bind(this);
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
      <img src={`${campus.image}`} />
      { campus &&
      <ul>
        <li>Name: {campus.name}</li>
        <li>ID: {campus.id}</li>
      </ul> }
      <hr />
      <h2>Students of {campus.name}</h2>
      <ul>
      {studentsOfCampus.map(student => {
        return <Link key={student.id} to={`/student/${student.id}`}>{student.name}</Link>
      })}
      </ul>
      <hr />
      <button value={campus.id} onClick={this.onSubmitDelete}>Delete Campus</button>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state, ownProps) => {
  console.log('mapstate prop', ownProps);
  const campuses = state.campuses;
  const students = state.students;
  const campusId = +ownProps.match.params.campusId;
  const studentsOfCampus = students.filter(student => {
    return student.campusId === campusId;
  });
  const campus = campuses.find(aCampus => aCampus.id === +ownProps.match.params.campusId);
  return {students, studentsOfCampus, campuses, campus, ownProps};
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
    }

  };
};

export default connect(mapState, mapDispatch)(CampusDetail);
