import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Header, Image } from 'semantic-ui-react';
import Nav from '../Component/Nav';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <Nav />
        <Image src={user.picture} alt={user.name} />
        <Header inverted as='h2' content={user.name} />
        <Header subheader inverted>
          {user.email}
        </Header>
      </>
    )
  );
};

export default Profile;
