import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = props => {
  const { isLoggedIn, type } = props;
  if (type === 'guest' && isLoggedIn) return <Redirect to='/home' />;
  else if (type === 'private' && !isLoggedIn) return <Redirect to='/' />;

  return <Route {...props} />;
};

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps)(AuthRoute);
