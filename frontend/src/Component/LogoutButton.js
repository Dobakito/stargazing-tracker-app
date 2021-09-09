import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const LogoutButton = () => {
  return (
    <Button
      animated
      inverted
      color='teal'
      fluid
      size='large'
      //   onClick={}
    >
      <Button.Content visible>Logout</Button.Content>
      <Button.Content hidden>
        <Icon name='frown' />
      </Button.Content>
    </Button>
  );
};

export default LogoutButton;
