import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentItem from './StudentItem';
import { loadCampus } from '../actions/campusActionCreators';
import StudentList from './StudentList';
import axios from 'axios';

export default class CampusDetail extends Component {

  constructor(){
    super();
    this.state = {
      campus: {},
      students: []
    }
  }

  componentDidMount () {
    axios.get('/api/campus/' + this.props.match.params.campusId)
      .then(response => {
        console.log(response);
        console.log(this.props.match.params.campusId);
        return response.data
      })
      .then(data => {
        console.log('data:', data);
        this.setState({
          students: data.students,
          campus: {
            id: data.id,
            name: data.name,
            url: data.url
          }
      })
      }
    )
  }

  render () {
    console.log('this.state', this.state, this.props.match.params.campusId);
    const campusId = this.props.match.params.campusId;
    return (
      <div>
        <h1>Campus details</h1>
        <ul>
          <li>ID: {campusId}</li>
          <li>Name: {this.state.campus.name}</li>
          <li>Name: X</li>
        </ul>
        {/* <StudentList campusId={campusId} /> */}
        <StudentList />
      </div>
    );
  }
}
