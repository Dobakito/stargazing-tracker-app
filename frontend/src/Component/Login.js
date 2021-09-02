import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

export default class Login extends Component {
  render() {
    return (
      <>
        <Segment
          textAlign='center'
          style={{ minHeight: 800, padding: '1em 0em', backgroundImage: `url(${"https://wallpaperaccess.com/full/662638.jpg"})`,
          backgroundSize: 'cover' }}
          vertical>
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
                    icon='user'
                    iconPosition='left'
                    placeholder='E-mail address'
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />
                  <Button color='teal' fluid size='large'>
                    Login
                  </Button>
                  <Link to='/signup' style={{ color: 'teal' }}>
                     Signup
                  </Link>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>
      </>
    );
  }
}
