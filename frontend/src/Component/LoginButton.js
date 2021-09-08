import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Icon } from 'semantic-ui-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      animated
      color='teal'
      fluid
      size='large'
      onClick={() => loginWithRedirect()}>
      <Button.Content visible>Login</Button.Content>
      <Button.Content hidden>
        <Icon name='space shuttle' />
      </Button.Content>
    </Button>
  );
};

export default LoginButton;
