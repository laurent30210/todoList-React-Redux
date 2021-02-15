// == Import npm
import React from 'react';

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

// == Export
export default Counter;
