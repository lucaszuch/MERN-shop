import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App/App';
import store from './Store';


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);