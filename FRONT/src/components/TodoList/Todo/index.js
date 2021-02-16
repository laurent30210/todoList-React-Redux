/* eslint-disable jsx-a11y/control-has-associated-label */
// == Import npm
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Error from 'src/containers/Error';
import PropTypes from 'prop-types';
// == Import
import './todo.scss';

// == Composant
const Todo = ({
  content,
  completed,
  id,
  handleTask,
  isEditing,
  valueTask,
  setValueTask,
  submitForEditTask,
  taskId,
  handleError,
}) => {
  const toggleTodo = (idCurrentTask, name) => {
    console.log('action sur la tâche : ', name, idCurrentTask);
    handleTask(name, idCurrentTask);
  };

  const submitTaskEdited = (event) => {
    event.preventDefault();
    // check value
    if (/^s*$/.test(valueTask)) {
      handleError(true);
      setTimeout(() => {
        handleError(false);
      }, 2000);
      return;
    }
    // if ok, let's go to edit
    submitForEditTask(taskId, valueTask);
  };

  return (
    <>
      <Error />
      <li
        className={completed ? 'todo todo--completed' : 'todo'}
        id={id}
        name="completed"
        onClick={(event) => toggleTodo(event.target.id, event.target.getAttribute('name'))}
      >

        { /* with a li, it should be used "GET ATTRIBUTE" for catch this name */ }
        {isEditing ? (
          <>
            <form
              className="todo__form"
              onSubmit={submitTaskEdited}
            >
              <input
                className="todo__form__input"
                type="text"
                value={valueTask}
                placeholder={content}
                onChange={(event) => setValueTask(event.target.value)}
              />
            </form>
            <button
              id={id}
              name="stopEditing"
              type="button"
              className="fas fa-times todo__button todo__button--trash"
              onClick={(event) => toggleTodo(event.target.id, event.target.name)}
            />
            {/** here, we take attribute name for dispatch multiples actions */}
          </>
        )
          : (
            <>
              <span
                className="todo__span"
                id={id}
                name="completed"
                onClick={(event) => toggleTodo(event.target.id, event.target.getAttribute('name'))}
              >
                {content}
              </span>
              <div className="todo__buttons">
                {!completed && (
                <button
                  id={id}
                  name="isEditing"
                  type="button"
                  className="fas fa-pencil-alt todo__button todo__button--edit"
                  onClick={(event) => toggleTodo(event.target.id, event.target.name)}
                />
                )}
                <button
                  id={id}
                  name="isRemoving"
                  type="button"
                  className="fas fa-trash-alt todo__button todo__button--trash"
                  style={{ backgroundColor: completed && 'rgb(177, 17, 17)' }}
                  onClick={(event) => toggleTodo(event.target.id, event.target.name)}
                />
              </div>
            </>
          )}
      </li>
    </>
  );
};
Todo.propTypes = {
  content: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleTask: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  valueTask: PropTypes.string.isRequired,
  setValueTask: PropTypes.func.isRequired,
  submitForEditTask: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
  handleError: PropTypes.func.isRequired,
};

// == Export
export default Todo;
