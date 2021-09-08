import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

export default function MCard({ messier }) {
  return (
    <Card>
      <Card.Content>
        <Image centered size='medium' src={messier.pretty_pic} />
      </Card.Content>
      <Card.Content>
        <Card.Header>{messier.m_number}</Card.Header>
        <Card.Meta>{messier.obj_type}</Card.Meta>
        <Card.Description>Common name: {messier.common_name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          as={Link}
          to={{
            pathname: `/show/${messier.id}`,
            state: { messier: messier },
          }}
          animated
          color='black'
          fluid
          size='medium'>
          <Button.Content visible>View Object</Button.Content>
          <Button.Content hidden>
            <Icon name='space shuttle' />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  );
}
