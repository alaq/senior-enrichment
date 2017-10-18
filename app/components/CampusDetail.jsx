import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { nameOfFunction } from '../store';

export default class CampusDetail extends Component {

  render () {
    return (
      <div>
        {this.props.match.params.campusId}
      </div>
    );
  }
}

