/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
//Navigation
import { createStackNavigator,createAppContainer } from 'react-navigation';
//Component
import Splash from './src/components/containers/splash';
import Change from './src/components/containers/change';
import CanNotChange from './src/components/containers/canNotChange';

const RootStack = createStackNavigator({
  Home: {
    screen : Splash,
    navigationOptions: {
      header: null
    },
  },
  Change : {
    screen : Change,
    navigationOptions: {
      header: null
    },
  },
  CanNotChange : {
    screen : CanNotChange,
    navigationOptions: {
      header: null
    },
  }
});

const App = createAppContainer(RootStack);

export default App;