import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createCampus } from '../actions/campusActionCreators';

class NewCampus extends Component {

  render() {
    return (
      <div>
        <li><label>Name</label><input type="text" /></li>
        <li><label>Image (url)</label><input type="text" /></li>
        <button type="submit">Create new Campus</button>
      </div>
    );
  }
}

const mapStateToProps = (state) =>
  {
    return state
  };

const mapDispatchToProps = (dispatch) => ({
  // fetchStudents: () => dispatch(loadStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus);
