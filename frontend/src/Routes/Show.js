import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container, Image } from 'semantic-ui-react';
import { addObservation } from '../Actions/messiers';
import _ from 'lodash';

export default class Show extends Component {
  handleClick = event => {
    event.preventDefault();
    console.log(this.props);
  };

  render() {
    // const { messiers } = this.props;
    return (
      <div className='show'>
        <Container>
          <Card>
            <Image rounded centered src={messier.pretty_pic} />
            <Card.Content>
              <Card.Header>{messier.m_number}</Card.Header>
              <Card.Meta>Common name: {messier.common_name}</Card.Meta>
              <Card.Meta>{messier.magnitude}</Card.Meta>
              <Card.Meta>{messier.dec}</Card.Meta>
              <Card.Meta>{messier.ra}</Card.Meta>
              <Card.Description>
                {messier.obj_type} in the constellation {messier.constellation}.
              </Card.Description>
              <Card.Description>{messier.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button>Add to your Observations!</Button>
            </Card.Content>
            <Image rounded centered src={messier.sky_pic} />
          </Card>
        </Container>
      </div>
    );
  }
}

// mapStateToProps = state => ({
//   messier: _.find(state, function(m){return m.id === })
// });

// connect(mapStateToProps, { addObservation })(Show);
