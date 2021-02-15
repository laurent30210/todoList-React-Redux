import { combineReducers } from 'redux';

// import reducers
import todosReducer from './todos';
import globalReducer from './global';
import todoReducer from './todo';

export default combineReducers({
  todosReducer,
  globalReducer,
  todoReducer,
});
