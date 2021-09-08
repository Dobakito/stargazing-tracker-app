import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import LogoutButton from './LogoutButton';
const Nav = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item icon='space shuttle' />
          <Menu.Item as='a' header>
            Stargazing Tracker
          </Menu.Item>
          <Menu.Item as='a'>
            <Link to='/objects'>Feed</Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
          <Menu.Item position='right'>
            <LogoutButton />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
};

export default Nav;
