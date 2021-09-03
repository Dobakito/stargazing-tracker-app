import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

export default class Home extends Component {
  render() {
    return (
      <Header inverted>
        Welcome to the Stargazer Tracker App. Please login to begin your
        celestual journey!
      </Header>
    );
  }
}
