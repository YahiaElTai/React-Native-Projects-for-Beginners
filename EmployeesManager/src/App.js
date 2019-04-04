import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBzh8IH2agm2RDXJWSgijMXRhu5cLBX8hc',
      authDomain: 'auth-9cc55.firebaseapp.com',
      databaseURL: 'https://auth-9cc55.firebaseio.com',
      projectId: 'auth-9cc55',
      storageBucket: 'auth-9cc55.appspot.com',
      messagingSenderId: '308031678587',
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
