import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import './index.css';

import reducer from './redux/reducer';
import App from './components/App';
import ThemeProvider from './components/theme/ThemeProvider';

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
