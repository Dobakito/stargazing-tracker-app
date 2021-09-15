import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { logoutUser } from '../Actions/userActions';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutUser());
  };
  return (
    <Button
      animated
      inverted
      color='teal'
      fluid
      size='large'
      onClick={handleClick}>
      <Button.Content visible>Logout</Button.Content>
      <Button.Content hidden>
        <Icon name='frown' />
      </Button.Content>
    </Button>
  );
};

export default LogoutButton;
