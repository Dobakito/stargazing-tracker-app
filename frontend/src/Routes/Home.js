/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Grid, Segment, Image, Embed } from 'semantic-ui-react';
import { getNasaPic } from '../Actions/messiers';
import Nav from '../Component/Nav';

const Home = () => {
  const dispatch = useDispatch();
  const apod = useSelector(state => state.apodReducer.apod);
  useEffect(() => {
    dispatch(getNasaPic());
  }, []);

  const renderMedia = () => {
    if (apod.media_type === 'video')
      return (
        <Embed
          active={true}
          url={apod.url}
          placeholder='https://tikipets.com/wp-content/uploads/2017/05/video-placeholder.png'
        />
      );
    else return <Image rounded fluid src={apod.url} />;
  };
  return (
    <>
      <Nav />
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 800 }}>
          <Segment textAlign='center' inverted stacked>
            <Header as='h2' color='teal' textAlign='center'>
              Please click an option in the Navbar to begin, <br /> or use the
              search bar to find friends!
            </Header>
            <Header color='teal' as='h4'>
              Enjoy the NASA Astronomy Pic of the Day below.
            </Header>
            {renderMedia()}
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
