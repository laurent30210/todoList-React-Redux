// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
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
Todos.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      content: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      isEditing: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
// == Export
export default Todos;
