import React from 'react';
import { Button, Segment, Image, Icon, Header } from 'semantic-ui-react';
import { addObservation } from '../Actions/messiers';
import { useLocation } from 'react-router';

export default function Show() {
  const handleClick = event => {
    event.preventDefault();
    console.log(this.props);
  };

  const location = useLocation();
  const { messier } = location.state;
  return (
    <div className='show'>
      <Segment inverted>
        <Image rounded centered fluid src={messier.pretty_pic} />
      </Segment>
      <Segment attached>
        <Header centered>{messier.m_number}</Header>
        <Header as='h2' centered>
          Common name: {messier.common_name}
        </Header>
        <Header.Subheader>
          {messier.obj_type} in the constellation {messier.constellation}.
        </Header.Subheader>
      </Segment>
      <Segment attached>
        <Header.Subheader>Magnitude: {messier.magnitude}</Header.Subheader>
        <Header.Subheader>Dec: {messier.dec}</Header.Subheader>
        <Header.Subheader>ra: {messier.ra}</Header.Subheader>
        <br />
        <Header.Content>{messier.description}</Header.Content>
      </Segment>
      <Segment attached>
        <Button
          animated
          color='black'
          fluid
          size='medium'
          onClick={handleClick}>
          <Button.Content visible>Add to your Observations!</Button.Content>
          <Button.Content hidden>
            <Icon name='space shuttle' />
          </Button.Content>
        </Button>
      </Segment>
      <Image rounded centered src={messier.sky_pic} />
    </div>
  );
}
