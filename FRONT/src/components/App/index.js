/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/components/Header';
import TodoList from 'src/components/TodoList';
import Footer from 'src/components/Footer';
// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <TodoList />
    <Footer />
    <Route
      path="/repo-github-laurent-darlet"
      component={() => {
        window.location.href = 'https://github.com/laurent30210/todoList-React-Redux';
      }}
    />
    <Route
      path="/laurent-darlet"
      component={() => {
        window.location.href = 'https://www.linkedin.com/in/laurent-darlet/';
      }}
    />
  </div>
);

// == Export
export default App;
