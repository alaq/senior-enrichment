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
  console.log('did root');
}

  render () {
    return (
      <div>
        <div>
<div>┏━━┳━━┳━━┳┳┓</div>
<div>┃┏┓┃━━┫┏━╋╋┫</div>
<div>┃┏┓┣━━┃┗━┫┃┃is cool.</div>
<div>┗┛┗┻━━┻━━┻┻┛</div>
        </div>
        <hr />
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
