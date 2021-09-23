import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon, Image, Transition } from 'semantic-ui-react';

const MCard = ({ messier }) => {
  return (
    <Transition transitionOnMount={true} animation='zoom'>
      <Card>
        <Card.Content>
          <Image
            centered
            rounded
            size='medium'
            style={{ height: '200px' }}
            verticalAlign='middle'
            src={messier.pretty_pic}
            alt='Pretty image of space'
          />
        </Card.Content>
        <Card.Content textAlign='center' style={{ maxHeight: '120px' }}>
          <Card.Header>{messier.m_number}</Card.Header>
          <Card.Meta>{messier.obj_type}</Card.Meta>
          <Card.Description>
            Common name: {messier.common_name}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            as={Link}
            to={`/show/${messier.id}`}
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
    </Transition>
  );
};

export default MCard;
