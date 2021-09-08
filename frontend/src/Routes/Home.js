import React, { Component } from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';
import LoginButton from '../Component/LoginButton';
import Nav from '../Component/Nav';

export default class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        <Grid
          textAlign='center'
          style={{ height: '75vh' }}
          verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment inverted stacked>
              <Header as='h2' color='teal' textAlign='center'>
                Welcome to the Stargazer Tracker App. Please login to begin your
                celestual journey!
              </Header>
              <LoginButton />
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
