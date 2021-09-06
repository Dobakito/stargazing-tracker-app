import React, { Component } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

export default class MCard extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const messier = this.props;
    return (
      <Card>
        <Card.Content>
          <Image
            centered
            size='medium'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/M57_The_Ring_Nebula.JPG/1200px-M57_The_Ring_Nebula.JPG'
          />
        </Card.Content>
        <Card.Content>
          <Card.Header>{messier}</Card.Header>
          <Card.Meta>Planetary Nebula</Card.Meta>
          <Card.Description>Common name: The Ring Nebula</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            animated
            color='black'
            fluid
            size='medium'
            onClick={this.handleSubmit}>
            <Button.Content visible>View Object</Button.Content>
            <Button.Content hidden>
              <Icon name='space shuttle' />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
