import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ------- for store --------
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './CombinedReducer/reducer'

const store = createStore(Reducers, compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);