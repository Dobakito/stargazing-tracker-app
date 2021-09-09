import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';
import userSchema from '../Validations/UserValidation';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    let formData = {
      username: username,
      email: email,
      password: password,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
  };

  return (
    <>
      <Grid
        textAlign='center'
        style={{ height: '75vh' }}
        verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment stacked inverted>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name='space shuttle' size='huge' /> Enter your Information!
            </Header>
            <Form size='large'>
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
                name='email'
                value={email}
                icon='mail'
                iconPosition='left'
                placeholder='Email'
                type='email'
                onChange={handleEmail}
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
                onClick={handleSubmit}>
                <Button.Content visible>Create Account</Button.Content>
                <Button.Content hidden>
                  <Icon name='space shuttle' />
                </Button.Content>
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default SignupForm;
