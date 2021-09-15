import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Header, Segment } from 'semantic-ui-react';
import { getObservations } from '../Actions/messiers';
import MCard from '../Component/MCard';
import Nav from '../Component/Nav';

const Profile = () => {
  const messiers = useSelector(state => state.observationReducer.observations);
  const user = useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getObservations());
  });
  return (
    <>
      <Nav />
      <Segment textAlign='center' inverted>
        <Header as='h2'>
          View all of your Observations, {user.username}!{' '}
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
