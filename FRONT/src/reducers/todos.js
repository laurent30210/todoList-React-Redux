import {
  ADD_TASK,
  HANDLE_VALUE,
  REMOVE_TODO,
  START_EDITING,
  TASK_COMPLETED,
  CHANGE_VALUE_FOR_TASK_EDITING,
} from 'src/store/actions';

const initialState = {
  tasks: [{
    id: 1, content: 'Hello, à vous de jouer maintenant', completed: true, isEditing: false,
  }],
  value: '',
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...oldState,
        tasks: [...oldState.tasks, action.task],
        value: '',
      };
    case HANDLE_VALUE:
      return {
        ...oldState,
        value: action.value,
      };
    case REMOVE_TODO:
      return {
        ...oldState,
        tasks: [...oldState.tasks.filter((task) => task.id !== action.id)],
      };
    case TASK_COMPLETED:
      return {
        ...oldState,
        tasks: oldState.tasks.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        }),
      };
    case START_EDITING:
      return {
        ...oldState,
        tasks: oldState.tasks.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              isEditing: true,
            };
          }
          return task;
        }),
      };
    case CHANGE_VALUE_FOR_TASK_EDITING:
      return {
        ...oldState,
        tasks: oldState.tasks.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              content: action.newValue,
              isEditing: false,
            };
          }
          return task;
        }),
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
