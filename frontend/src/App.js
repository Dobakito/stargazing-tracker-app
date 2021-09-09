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
                <Route path='/login'>
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
                </Route>
                <Route path='/show/:id'>
                  <Show />
                </Route>
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
