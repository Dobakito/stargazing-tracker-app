import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Grid, Segment, Icon, Button } from 'semantic-ui-react';
import LogoutButton from '../Component/LogoutButton';

const Welcome = () => {
  return (
    <>
      <Grid
        textAlign='center'
        style={{ height: '75vh' }}
        verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment textAlign='center' inverted stacked>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name='space shuttle' size='huge' />
              Welcome to the Stargazer Tracker App. Please login to begin your
              celestual journey!
            </Header>
            <Button
              animated
              as={Link}
              to='/login'
              color='teal'
              fluid
              size='large'>
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
                <Icon name='space shuttle' />
              </Button.Content>
            </Button>
            <Button
              animated='vertical'
              as={Link}
              to='/signup'
              color='violet'
              fluid
              size='large'>
              <Button.Content visible>First time? Signup</Button.Content>
              <Button.Content hidden>
                <Icon name='rocket' />
              </Button.Content>
            </Button>
            <br />
            <LogoutButton />
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Welcome;
