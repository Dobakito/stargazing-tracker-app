import { Switch, Route } from 'react-router-dom';
import Signup from './Routes/Signup';
import Nav from './Component/Nav';
import Profile from './Routes/Profile';
import Objects from './Routes/Objects';
import Show from './Routes/Show';
import Login from './Routes/Login';
import { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Home from './Routes/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <Segment
          style={{
            minHeight: '100vh',
            padding: '1em 0em',
            backgroundImage: `url(${'https://apod.nasa.gov/apod/image/1305/ngc6960_FinalPugh.jpg'})`,
            backgroundSize: 'cover',
          }}>
          <Container style={{ marginTop: '60px' }}>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route path='/signup'>
                <Signup />
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
              <Route exact path='/objects'>
                <Objects />
                <Route path='/objects/:id'>
                  <Show />
                </Route>
              </Route>
            </Switch>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
