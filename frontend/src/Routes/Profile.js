/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Header, Segment, Modal, Button } from 'semantic-ui-react';
import MCard from '../Component/MCard';
import Nav from '../Component/Nav';
import { getObservations } from '../Actions/observationActions';
import { Link } from 'react-router-dom';
import { getFriends } from '../Actions/friendActions';

const Profile = () => {
  const messiers = useSelector(state => state.observationReducer.observations);
  const user = useSelector(state => state.userReducer.user);
  const friends = useSelector(state => state.friendsReducer.friends);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(getObservations(user.id));
  }, []);

  useEffect(() => {
    dispatch(getFriends(user.id));
  }, [open]);

  return (
    <>
      <Nav />
      <Segment textAlign='center' inverted>
        <Header as='h2'>
          View all of your Observations, {user.username}!
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            size='tiny'
            open={open}
            trigger={
              <Button color='teal' size='medium' floated='right'>
                View your friends
              </Button>
            }>
            <Modal.Header>{user.username}'s friends</Modal.Header>
            {friends.map(friend => (
              <Modal.Content
                key={friend.id}
                as={Link}
                to={`/user/${friend.username}`}>
                {friend.username}
              </Modal.Content>
            ))}
            <Modal.Actions>
              <Button color='black' onClick={() => setOpen(false)}>
                exit
              </Button>
            </Modal.Actions>
          </Modal>
        </Header>
      </Segment>
      <Card.Group itemsPerRow={4}>
        {messiers.map(messier => (
          <MCard key={messier.id} messier={messier} />
        ))}
      </Card.Group>
    </>
  );
};

export default Profile;
