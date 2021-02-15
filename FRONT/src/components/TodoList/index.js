// == Import npm
import React from 'react';

import Form from 'src/containers/Form';
import Todos from 'src/containers/Todos';
import Counter from 'src/containers/Counter';
// == Import
import './todoList.scss';

// == Composant
const TodoList = () => (
  <div className="todoList">
    <Form />
    <Todos />
    <Counter />
  </div>
);

// == Export
export default TodoList;
