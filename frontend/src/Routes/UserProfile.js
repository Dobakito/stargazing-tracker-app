/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Header, Icon, Segment } from 'semantic-ui-react';
import MCard from '../Component/MCard';
import Nav from '../Component/Nav';
import { getObservations } from '../Actions/observationActions';
import { useParams } from 'react-router';
import { createFriend } from '../Actions/friendActions';

const UserProfile = () => {
  const badParam = useParams();
  const id = parseInt(badParam.id) + 1;
  const messiers = useSelector(state => state.observationReducer.observations);
  const currentUser = useSelector(state => state.userReducer.user);
  const user = useSelector(state => state.searchReducer.users[id]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getObservations(user.id));
  }, []);

  const handleClick = () => {
    dispatch(createFriend(currentUser.id, user.id));
  };
  return (
    <>
      <Nav />
      <Segment textAlign='center' inverted>
        <Header as='h2'>View all {user.username}'s Observations</Header>
        <Button animated color='teal' fluid size='medium' onClick={handleClick}>
          <Button.Content visible>Add Friend!</Button.Content>
          <Button.Content hidden>
            <Icon name='user plus' />
          </Button.Content>
        </Button>
      </Segment>
      <Card.Group itemsPerRow={4}>
        {messiers.map(messier => (
          <MCard key={messier.id} messier={messier} />
        ))}
      </Card.Group>
    </>
  );
};

export default UserProfile;
