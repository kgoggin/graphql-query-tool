import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import RootLayout from './components/RootLayout/RootLayout';

const store = configureStor();

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <RootLayout />
      <Provider/>
    );
  }
}

export default App;
