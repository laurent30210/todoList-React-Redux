// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import
import './counter.scss';

// == Composant
const Counter = ({ tasks }) => {
  const count = tasks.filter((task) => !task.completed).length;

  return (
    <span className="counter">
      {count}
    </span>
  );
};
Counter.propTypes = {
  tasks: PropTypes.array.isRequired,
};
// == Export
export default Counter;
