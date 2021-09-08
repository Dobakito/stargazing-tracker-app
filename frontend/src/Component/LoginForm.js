import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
  };

  return (
    <>
      <Grid
        textAlign='center'
        style={{ height: '75vh' }}
        verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                name='username'
                value={username}
                icon='user'
                iconPosition='left'
                placeholder='Username'
                onChange={handleUsername}
                required
              />
              <Form.Input
                fluid
                name='password'
                value={password}
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={handlePassword}
                required
              />
              <Button
                animated
                color='teal'
                fluid
                size='large'
                onClick={handleClick}>
                <Button.Content visible>Login</Button.Content>
                <Button.Content hidden>
                  <Icon name='space shuttle' />
                </Button.Content>
              </Button>
              <Button
                animated
                color='google'
                fluid
                size='large'
                onClick={handleClick}>
                <Button.Content visible>Login with Google</Button.Content>
                <Button.Content hidden>
                  <Icon name='google' />
                </Button.Content>
              </Button>
              <br />
              <Link to='/signup' style={{ color: 'teal' }}>
                First time? Signup here
              </Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default LoginForm;
