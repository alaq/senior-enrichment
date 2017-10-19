import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentItem from './StudentItem';
import { loadStudents } from '../actions/studentActionCreators';
import StudentList from './StudentList';

export default class CampusDetail extends Component {

  render () {
    const campusId = this.props.match.params.campusId;
    return (
      <div>
        <StudentList campusId={campusId} />
      </div>
    );
  }
}
