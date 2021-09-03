import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addObservation } from '../Actions/messiers';

export default class Show extends Component {
  render() {
    return <div></div>;
  }
}

connect(null, { addObservation })(Show);
