import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CampusList from './CampusList';
import CampusDetail from './CampusDetail';
import StudentList from './StudentList';
import StudentDetail from './StudentDetail';
import { connect } from 'react-redux';
import { loadCampuses } from '../actions/campusActionCreators';
import { loadStudents } from '../actions/studentActionCreators';

class Root extends Component {

componentDidMount () {
  this.props.fetchInitialData();
}


  render () {
    return (
      <div>
        <div>
<div>                                88 88</div>
<div>                                "" ""</div>
<div>,adPPYYba, ,adPPYba,  ,adPPYba, 88 88</div>
<div>""     `Y8 I8[    "" a8"     "" 88 88</div>
<div>,adPPPPP88  `"Y8ba,  8b         88 88</div>
<div>88,    ,88 aa    ]8I "8a,   ,aa 88 88</div>
<div>`"8bbdP"Y8 `"YbbdP"'  `"Ybbd8"' 88 88 is cool</div>
        </div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/campus">Campuses</Link></li>
              <li><Link to="/student">Students</Link></li>
            </ul>
            <hr />
            <Switch>
              <Route exact path="/" />
              <Route exact path="/campus/:campusId" component={CampusDetail} />
              <Route exact path="/campus" component={CampusList} />
              <Route exact path="/student/:studentId" component={StudentDetail} />
              <Route exact path="/student" component={StudentList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(loadCampuses());
    dispatch(loadStudents());
  }
})

export default connect(mapProps, mapDispatch)(Root);
