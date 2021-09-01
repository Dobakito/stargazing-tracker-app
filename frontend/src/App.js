import './App.css';
import { Button, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Routes/Login';
import Signup from './Routes/Signup';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/login' component={Login}>
          Login
        </Route>
        <Route path='/signup' component={Signup}>
          Signup
        </Route>
      </div>
    </Router>
  );
}

export default App;
