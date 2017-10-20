import React, { Component } from 'react';
import CampusItem from './CampusItem';
import NewCampus from './NewCampus';
import { connect } from 'react-redux';

import { loadCampuses } from '../actions/campusActionCreators';

class CampusList extends Component {

  // componentDidMount() {
  //   this.props.fetchCampuses();
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.campuses.length !== this.props.campuses.length) {
      this.props.fetchCampuses();
    }
  }

  render () {
    const { campuses } = this.props;
    return (
      <div>

<div>╋╋┏┳━┳┓╋╋╋┏━┓╋╋╋╋╋╋╋╋╋╋╋╋┏━┓╋┏━┓</div>
<div>┏┓┣┫━┫┗┓┏━┫━┫┏━┳━┓┏━━┳━┳┳┫━╋━┫━┫</div>
<div>┃┗┫┣━┃┏┫┃╋┃┏┛┃━┫╋┗┫┃┃┃╋┃┃┣━┃┻╋━┃ there are {campuses.length} of them.</div>
<div>┗━┻┻━┻━┛┗━┻┛╋┗━┻━━┻┻┻┫┏┻━┻━┻━┻━┛</div>
<div>╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋┗┛</div>

<ul>
          {campuses && campuses.map(campus => <CampusItem key={campus.id} campus={campus} />)}
</ul>
          <hr />
<div>╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋┏━┓</div>
<div>┏━┳┳━┳┳┳┓┏━┳━┓┏━━┳━┳┳┫━┫</div>
<div>┃┃┃┃┻┫┃┃┃┃━┫╋┗┫┃┃┃╋┃┃┣━┃</div>
<div>┗┻━┻━┻━━┛┗━┻━━┻┻┻┫┏┻━┻━┛</div>
<div>╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋┗┛</div>
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
