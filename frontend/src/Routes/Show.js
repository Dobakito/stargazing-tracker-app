/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Button, Segment, Image, Icon, Header } from 'semantic-ui-react';
import Nav from '../Component/Nav';
import _ from 'lodash';
import { addObservation } from '../Actions/observationActions';

const Show = () => {
  const dispatch = useDispatch();
  const badParam = useParams();
  const id = parseInt(badParam.id) - 1;
  const messier = useSelector(state => state.messierReducer.messiers[id]);
  const user = useSelector(state => state.userReducer.user);
  const observations = useSelector(
    state => state.observationReducer.observations
  );

  const match = _.find(observations, messier);

  console.log(match);
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
          <Button
            className='addObservation'
            disabled={match ? true : false}
            animated
            color='black'
            fluid
            size='medium'
            onClick={() => dispatch(addObservation(messier.id, user.id))}>
            <Button.Content visible>
              {match
                ? "You've already observed this object."
                : 'Add to your Observations!'}
            </Button.Content>
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
