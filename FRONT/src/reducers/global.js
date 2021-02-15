import {
  ACTIVE_ERROR,
} from 'src/store/actions';

const initialState = {
  error: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case ACTIVE_ERROR:
      return {
        ...oldState,
        error: action.boolean,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
