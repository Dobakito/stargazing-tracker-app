import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import MCard from '../Component/MCard';
import Nav from '../Component/Nav';

export default class Objects extends Component {
  render() {
    return (
      <div className='Objects'>
        <Nav />
        <Card.Group itemsPerRow={4}>
          <MCard />
          <MCard />
          <MCard />
          <MCard />
          <MCard />
          <MCard />
          <MCard />
          <MCard />
        </Card.Group>
      </div>
    );
  }
}
