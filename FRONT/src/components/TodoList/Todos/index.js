// == Import npm
import React from 'react';

import Todo from 'src/containers/Todo';
// == Import
import './todos.scss';

// == Composant
const Todos = ({ tasks }) => (
  <div className="todos">
    <ul>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          id={task.id}
          content={task.content}
          completed={task.completed}
          isEditing={task.isEditing}
        />
      ))}
    </ul>
  </div>
);

// == Export
export default Todos;
