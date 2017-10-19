import React, { Component } from 'react';
import CampusItem from './CampusItem';
import NewCampus from './NewCampus';
import { connect } from 'react-redux';

import { loadCampuses } from '../actions/campusActionCreators';

class CampusList extends Component {

  componentDidMount() {
    this.props.fetchCampuses();
  }

  render () {
    const { campuses } = this.props;
    return (
      <div>
          <h2>List of campuses</h2>
          {campuses && campuses.map(campus => <CampusItem key={campus.id} campus={campus} />)}
          <h2>New campus</h2>
          <NewCampus />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  campuses: state.campuses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCampuses: () => dispatch(loadCampuses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampusList);
