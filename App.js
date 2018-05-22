import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from './src/redux/stores'
import {Provider} from 'react-redux'

import InstaClone from './src/InstaClone';
export default class App extends Component{
  render() {
    return (
      <Provider store={store.configureStore()}>
        <InstaClone />
      </Provider>
    );
  }
}

