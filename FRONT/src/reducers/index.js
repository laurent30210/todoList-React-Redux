import { combineReducers } from 'redux';

// import reducers
import todosReducer from './todos';
import globalReducer from './global';
import todoReducer from './todo';

export default combineReducers({
  // setup many states, but it's not necessary really for an todoList (it's just for a example)
  todosReducer,
  globalReducer,
  todoReducer,
});
