import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newCampus } from '../actions/campusActionCreators';

class NewCampus extends Component {

  constructor(props){
    super(props);
    this.onCampusSubmit = this.onCampusSubmit.bind(this);
  }

  onCampusSubmit (e) {
    e.preventDefault();
    const newCampus = {
      name: e.target.name.value,
      image: e.target.image.value
    }
    this.props.addCampus(newCampus);
  }

  render() {
    return (
      <form onSubmit={this.onCampusSubmit}>
        <li><label>Name</label><input name="name" type="text" /></li>
        <li><label>Image (url)</label><input name="image" type="text" /></li>
        <button type="submit">Create new Campus</button>
      </form>
    );
  }
}

const mapStateToProps = (state) =>
  {
    return state
  };

const mapDispatchToProps = (dispatch) => ({
  addCampus: (campus) => dispatch(newCampus(campus))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus);
