import React from 'react';
import { Header, Grid, Segment, Icon } from 'semantic-ui-react';
import Nav from '../Component/Nav';

const Home = () => {
  return (
    <>
      <Nav />
      <Grid
        textAlign='center'
        style={{ height: '75vh' }}
        verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment textAlign='center' inverted stacked>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name='space shuttle' size='huge' />
              Please click an option in the Navbar to begin!
              <Header.Subheader color='teal' textAlign='center'>
                Enjoy a NASA Pic of the Day below.
              </Header.Subheader>
            </Header>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Home;
