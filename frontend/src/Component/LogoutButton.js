import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Icon } from 'semantic-ui-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      animated
      inverted
      color='teal'
      fluid
      size='large'
      onClick={() => logout({ returnTo: window.location.origin })}>
      <Button.Content visible>Logout</Button.Content>
      <Button.Content hidden>
        <Icon name='frown' />
      </Button.Content>
    </Button>
  );
};

export default LogoutButton;
