import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCampus } from '../actions/campusActionCreators';
import CampusList from './CampusList';

class CampusDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      campus: {
        name: 'aa',
        id: '1',
        image: ''
      }
    }
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

  render () {
    const campus = this.state.campus;
    console.log('this.state.campus', campus);
    return (
      <ul>
        <li>Name: {campus.name}</li>
        <li>ID: {campus.id}</li>
      </ul>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state, ownProps) => {
  console.log('state in map', state);
  const campuses = state.campuses;
  const students = state.students;
  const campus = campuses.find(aCampus => aCampus.id === +ownProps.match.params.campusId);
  const campusId = ownProps.campusId;
  console.log(students, campuses, ownProps)
  return {students, campuses, ownProps};
  // return { students, campuses, ownProps };
};

const mapDispatch = (dispatch, ownProps) => {
  return {

    fetchCampusDetail: () => {
      const campusId = ownProps.match.params.campusId;
      console.log(campusId);
      dispatch(loadCampus(campusId));
    }

  };
};

export default connect(mapState, mapDispatch)(CampusDetail);
