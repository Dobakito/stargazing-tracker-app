import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Image } from 'semantic-ui-react';
import { addObservation } from '../Actions/messiers';

export default class Show extends Component {
  handleClick = event => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <Image></Image>
        <Button onClick={this.handleClick} />
      </>
    );
  }
}

connect(null, { addObservation })(Show);
