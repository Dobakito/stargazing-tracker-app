import { Switch, Route } from 'react-router-dom';
import Login from './Routes/Login';
import Signup from './Routes/Signup';
import Nav from './Component/Nav';
import Profile from './Routes/Profile';
import Objects from './Routes/Objects';
import Show from './Routes/Show';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Login />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/profile' component={Profile} />
        <Route exact path='/objects' component={Objects}>
          <Route path='/objects/:id' component={Show} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
