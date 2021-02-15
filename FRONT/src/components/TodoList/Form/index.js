// == Import npm
import React from 'react';
import uniquid from 'uniquid';
// == Import
import './form.scss';

// == Composant
const Form = ({
  value,
  setValue,
  submitForAddTask,
  handleError,
}) => {
  const submitTask = (event) => {
    event.preventDefault();
    if (/^s*$/.test(value)) {
      handleError(true);
      setTimeout(() => {
        handleError(false);
      }, 2000);
      return;
    }

    const task = {
      id: uniquid(),
      content: value,
      completed: false,
      isEditing: false,
    };
    submitForAddTask(task);
  };
  return (
    <form
      className="form"
      onSubmit={submitTask}
    >
      <input
        className="form__input"
        type="text"
        placeholder="Write your dreams"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
};

// == Export
export default Form;
