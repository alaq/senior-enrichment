import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CampusList from './CampusList';
import CampusDetail from './CampusDetail';
import StudentList from './StudentList';
import StudentDetail from './StudentDetail';

const Root = () => {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/campuses">Campuses</Link></li>
              <li><Link to="/students">Students</Link></li>
            </ul>
            <hr />
            <Switch>
              <Route exact path="/" />
              <Route exact path="/campuses/:campusId" component={CampusDetail} />
              <Route exact path="/campuses" component={CampusList} />
              <Route exact path="/students/:studentId" component={StudentDetail} />
              <Route exact path="/students" component={StudentList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
};

export default Root;
