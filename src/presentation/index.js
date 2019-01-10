import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as ServiceWorker from './serviceWorker';
import { App } from './App';

export const initializePresentationLayer = (store) => {
  ReactDOM.render(
    <Provider store={store}>
      <App  />
    </Provider>,
    document.getElementById('react-app'));
  ServiceWorker.unregister()
};
