import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

export default class Login extends Component {

    state = {
      email: '',
      username: '',
      password: ''
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
          [name]: value,
        });
      };

    handleSubmit = event => {
      event.preventDefault();

    }

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
              <Header as='h2' color='teal' textAlign='center' icon='space shuttle'>
                Log-in to your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input
                    fluid
                    value={this.state.email}
                    icon='mail'
                    iconPosition='left'
                    placeholder='E-mail address'
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    value={this.state.username}
                    icon='user'
                    iconPosition='left'
                    placeholder='Username'
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    value={this.state.password}
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={this.handleChange}
                  />
                  <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
                    Login
                  </Button>
                  <br/>
                  <Link to='/signup' style={{ color: 'teal' }}>
                     First time? Signup here
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
