// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import TodoList from 'src/components/TodoList';
// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <TodoList />
  </div>
);

// == Export
export default App;
