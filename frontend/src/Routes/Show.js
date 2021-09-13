import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Button, Segment, Image, Icon, Header } from 'semantic-ui-react';
import Nav from '../Component/Nav';
// import { addObservation } from '../Actions/messiers';

const Show = () => {
  const badParam = useParams();
  const id = parseInt(badParam.id) - 1;
  const messier = useSelector(state => state.messierReducer.messiers[id]);

  return (
    <>
      <Nav />
      <div className='show'>
        <Segment inverted>
          <Image rounded centered fluid src={messier.pretty_pic} />
        </Segment>
        <Segment attached textAlign='center'>
          <Header as='h1'>{messier.m_number}</Header>
          <Header as='h2'>Common name: {messier.common_name}</Header>
          <Header.Subheader>
            {messier.obj_type} in the constellation {messier.constellation}.
          </Header.Subheader>
        </Segment>
        <Segment attached textAlign='center'>
          <Header.Subheader>Magnitude: {messier.magnitude}</Header.Subheader>
          <Header.Subheader>Dec: {messier.dec}</Header.Subheader>
          <Header.Subheader>ra: {messier.ra}</Header.Subheader>
          <br />
          <Header.Content>{messier.description}</Header.Content>
        </Segment>
        <Segment attached>
          <Button animated color='black' fluid size='medium'>
            <Button.Content visible>Add to your Observations!</Button.Content>
            <Button.Content hidden>
              <Icon name='space shuttle' />
            </Button.Content>
          </Button>
        </Segment>
        <Image rounded centered src={messier.sky_pic} />
      </div>
    </>
  );
};

export default Show;
