import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { messierReducer } from './Reducers/messiersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Auth0Provider } from '@auth0/auth0-react';

const store = createStore(
  messierReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain='dev-4nxipnay.us.auth0.com'
      clientId='YOEFfzDCQV5uFKf0GGcqn9RMjZGM2aD2'
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
