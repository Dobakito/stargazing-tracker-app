/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Grid, Segment, Image } from 'semantic-ui-react';
import { getNasaPic } from '../Actions/messiers';
import Nav from '../Component/Nav';

const Home = () => {
  const dispatch = useDispatch();
  const apod = useSelector(state => state.apodReducer.apod);
  useEffect(() => {
    dispatch(getNasaPic());
  }, []);
  return (
    <>
      <Nav />
      <Grid
        textAlign='center'
        style={{ height: '75vh' }}
        verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 800 }}>
          <Segment textAlign='center' inverted stacked>
            <Header as='h2' color='teal' textAlign='center'>
              Please click an option in the Navbar to begin!
            </Header>
            <Header color='teal' as='h4'>
              Enjoy the NASA Astronomy Pic of the Day below.
            </Header>
            <Image rounded fluid src={apod.url} />
            <Header as='h5' color='teal'>
              Picture explination:
            </Header>
            <Header as='h5' color='teal'>
              "{apod.explanation}"
            </Header>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Home;
