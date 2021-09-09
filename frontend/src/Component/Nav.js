import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import LogoutButton from './LogoutButton';
const Nav = () => {
  return (
    <>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item icon='space shuttle' />
          <Menu.Item as='a' header>
            Stargazing Tracker
          </Menu.Item>
          <Menu.Item as='a'>
            <Link to='/objects'>Objects</Link>
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
