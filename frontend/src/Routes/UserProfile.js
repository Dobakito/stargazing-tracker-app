/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Header, Icon, Segment } from 'semantic-ui-react';
import MCard from '../Component/MCard';
import Nav from '../Component/Nav';
import { getObservations } from '../Actions/observationActions';
import { useParams } from 'react-router';
import { createFriend, getFriends } from '../Actions/friendActions';
import _ from 'lodash';

const UserProfile = () => {
  const param = useParams();
  const allUsers = useSelector(state => state.searchReducer.users);
  const user = _.find(allUsers, param);
  const messiers = useSelector(state => state.observationReducer.observations);
  const currentUser = useSelector(state => state.userReducer.user);
  const friends = useSelector(state => state.friendsReducer.friends);
  const match = _.find(friends, user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getObservations(user.id));
    dispatch(getFriends(currentUser.id));
  }, [user]);

  const handleClick = () => {
    dispatch(createFriend(currentUser.id, user.id));
  };

  return (
    <>
      <Nav />
      <Segment textAlign='center' inverted>
        <Header as='h2'>View all {user.username}'s Observations</Header>
        <Button
          disabled={match ? true : false}
          animated
          color='teal'
          fluid
          size='medium'
          onClick={handleClick}>
          <Button.Content visible>
            {match
              ? `You and ${user.username} are already friends`
              : `Add ${user.username} as a friend!`}
          </Button.Content>
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
