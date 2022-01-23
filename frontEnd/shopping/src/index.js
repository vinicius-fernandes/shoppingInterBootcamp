import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './components/store';
import { PersistGate } from 'redux-persist/integration/react'

let loadStore = Store();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={loadStore.store}>
        <PersistGate loading={null} persistor={loadStore.persistor}>

    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

