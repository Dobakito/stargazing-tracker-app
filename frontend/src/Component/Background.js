import React from 'react';
import { Segment, Container } from 'semantic-ui-react';

const Background = () => {
  return (
    <>
      <Segment
        style={{
          minHeight: '100vh',
          padding: '1em 0em',
          backgroundImage: `url(${'https://apod.nasa.gov/apod/image/1305/ngc6960_FinalPugh.jpg'})`,
          backgroundSize: 'cover',
        }}
      />
      <Container style={{ marginTop: '60px' }} />
    </>
  );
};

export default Background;
