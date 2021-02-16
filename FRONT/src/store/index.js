import { createStore } from 'redux';
import rootReducer from 'src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  // setup rootReducer -> toll's reducers
  rootReducer,
  composeWithDevTools(),
);

export default store;
