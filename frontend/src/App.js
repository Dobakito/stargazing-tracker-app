import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Routes/Profile';
import Objects from './Routes/Objects';
import Show from './Routes/Show';
import { Container, Segment } from 'semantic-ui-react';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Signup from './Routes/Signup';
import AuthRoute from './Component/AuthRoute';

const App = () => {
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
};

export default App;
