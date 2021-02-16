// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import
import './error.scss';

// == Composant
const Error = ({ error }) => (
  <span className={error ? 'error error--active' : 'error'}>
    Oups, Erreur !
  </span>
);
Error.propTypes = {
  error: PropTypes.bool.isRequired,
};
// == Export
export default Error;
