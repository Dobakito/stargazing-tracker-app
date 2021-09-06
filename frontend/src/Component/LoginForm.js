import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick = event => {
    event.preventDefault();
  };

  render() {
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
                  value={this.state.username}
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  onChange={this.handleChange}
                  required
                />
                <Form.Input
                  fluid
                  name='password'
                  value={this.state.password}
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                  required
                />
                <Button
                  animated
                  color='teal'
                  fluid
                  size='large'
                  onClick={this.handleClick}>
                  <Button.Content visible>Login</Button.Content>
                  <Button.Content hidden>
                    <Icon name='space shuttle' />
                  </Button.Content>
                </Button>
                <Button
                  animated
                  color='red'
                  fluid
                  size='large'
                  onClick={this.handleClick}>
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
  }
}
