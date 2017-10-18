import React, { Component } from 'react';
import CampusItem from './CampusItem';
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
          <h1>List of campuses</h1>
          {campuses && campuses.map(campus => <CampusItem key={campus.id} campus={campus} />)}
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
