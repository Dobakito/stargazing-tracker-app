import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Routes/Profile';
import Objects from './Routes/Objects';
import Show from './Routes/Show';
import { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Home from './Routes/Home';
import { getAllMessiers } from './Actions/messiers';
import { connect } from 'react-redux';
import Login from './Routes/Login';
import Signup from './Routes/Signup';
import AuthRoute from './Component/AuthRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  componentDidMount() {
    this.props.getAllMessiers();
  }

  render() {
    return (
      <Router>
        <div className='App'>
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
                <AuthRoute type='guest' path='/login'>
                  <Login />
                </AuthRoute>
                <AuthRoute type='guest' path='/signup'>
                  <Signup />
                </AuthRoute>
                <AuthRoute type='private' path='/profile'>
                  <Profile />
                </AuthRoute>
                <AuthRoute type='private' exact path='/objects'>
                  <Objects />
                </AuthRoute>
                <AuthRoute type='private' path='/show/:id'>
                  <Show />
                </AuthRoute>
              </Switch>
            </Container>
          </Segment>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllMessiers: () => dispatch(getAllMessiers()),
});

export default connect(null, mapDispatchToProps)(App);
