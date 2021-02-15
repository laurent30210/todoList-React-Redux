import {
  CHANGE_VALUE_TASK,
  SAVE_TASK_ID,
} from 'src/store/actions';

const initialState = {
  value: '',
  taskId: '',
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE_TASK:
      return {
        ...oldState,
        value: action.value,
      };
    case SAVE_TASK_ID:
      return {
        ...oldState,
        taskId: action.id,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
