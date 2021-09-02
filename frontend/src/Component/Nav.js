import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default function Nav() {
  return (
    <>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item icon='space shuttle' />
          <Menu.Item as='a' header>
            Stargazing Tracker
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
        </Container>
      </Menu>
    </>
  );
}
