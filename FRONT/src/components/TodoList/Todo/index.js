/* eslint-disable jsx-a11y/control-has-associated-label */
// == Import npm
import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import Error from 'src/containers/Error';
import PropTypes from 'prop-types';
// == Import
import './todo.scss';
import colorsRandom from '../../../colors';

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
  // install refElement
  const todoRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // change background style in current target
    todoRef.current.style.backgroundColor = !isEditing && !completed ? colorsRandom() : 'rgba(148, 148, 148, 0.8)';
    // and focus on this item
    if (isEditing) {
      inputRef.current.focus();
    }
  });

  const toggleTodo = (idCurrentTask, name) => {
    // here, we retrieve, id and name of element for to process the corresponding action
    console.log('action sur la tâche : ', name, idCurrentTask);
    handleTask(name, idCurrentTask);
  };
  const submitTaskEdited = (event) => {
    event.preventDefault();
    // check value
    if (/^s*$/.test(valueTask)) {
      // active error message
      handleError(true);
      setTimeout(() => {
        // and stop after 2s
        handleError(false);
      }, 2000);
      return;
    }
    // when all it's good, go to edit
    submitForEditTask(taskId, valueTask);
  };

  return (
    <>
      {/** an error? display message */}
      <Error />
      <li
        ref={todoRef}
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
                ref={inputRef}
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
// PropTypes //
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
