import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import LogoutButton from './LogoutButton';
import SearchBar from './SearchBar';
const Nav = () => {
  return (
    <>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item icon='space shuttle' />
          <Menu.Item header>
            <Link to='/home'> Stargazing Tracker</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/objects'>Objects</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
          <Menu.Item position='right'>
            <SearchBar />
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
