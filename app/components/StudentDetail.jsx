import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class StudentDetail extends Component {

  render () {
    return (
      <div>
        {this.props.match.params.studentId}
      </div>
    );
  }
}
