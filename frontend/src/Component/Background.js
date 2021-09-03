import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export default class Background extends Component {
  render() {
    return (
      <Segment
        textAlign='center'
        style={{
          minHeight: 800,
          padding: '1em 0em',
          backgroundImage: `url(${'https://wallpaperaccess.com/full/662638.jpg'})`,
          backgroundSize: 'cover',
        }}
        vertical
      />
    );
  }
}
