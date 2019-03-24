/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//redux
import {Provider} from 'react-redux';
import {createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './src/redux/reducers';
import { composeWithDevTools } from 'remote-redux-devtools';

const middleware = [
    thunk,
];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware))); 


const AppContainer = () =>
    <Provider store={store}>
        <App/>
   </Provider>



AppRegistry.registerComponent(appName, () => AppContainer);
