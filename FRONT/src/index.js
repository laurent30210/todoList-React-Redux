// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
// Composants
import App from 'src/components/App';
import store from 'src/store';

// == Render
const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
const target = document.getElementById('root');
render(rootReactElement, target);
