import React from 'react';
import { Link } from 'react-router-dom';
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
          <Menu.Item as='a'>
            <Link to='/login'>Login</Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Link to='/objects'>Feed</Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}
