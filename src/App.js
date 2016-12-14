import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBU-XZSNvhgs5-l6yRyZo0pXAq_b6nkuZI',
      authDomain: 'manager-e2fa0.firebaseapp.com',
      databaseURL: 'https://manager-e2fa0.firebaseio.com',
      storageBucket: 'manager-e2fa0.appspot.com',
      messagingSenderId: '239536565099'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
