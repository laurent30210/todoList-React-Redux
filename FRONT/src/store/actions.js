// create action creator

// ADD TASKS
export const ADD_TASK = 'ADD_TASK';
export const HANDLE_VALUE = 'HANDLE_VALUE';
// REMOVE TODO
export const REMOVE_TODO = 'REMOVE_TODO';
// EDITING
export const START_EDITING = 'START_EDITING';
export const STOP_EDITING = 'STOP_EDITING';
export const SAVE_TASK_ID = 'SAVE_TASK_ID';
export const CHANGE_VALUE_TASK = 'CHANGE_VALUE_TASK';
export const CHANGE_VALUE_FOR_TASK_EDITING = 'CHANGE_VALUE_FOR_TASK_EDITING';
// COMPLETED
export const TASK_COMPLETED = 'TASK_COMPLETED';
// GLOBAL
export const ACTIVE_ERROR = 'ACTIVE_ERROR';
export const ACTIVE_LOADER = 'ACTIVE_LOADER';

export const addTask = (task) => ({
  type: ADD_TASK,
  task,
});
export const handleValue = (value) => ({
  type: HANDLE_VALUE,
  value,
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});
export const startEditing = (id) => ({
  type: START_EDITING,
  id,
});
export const saveTaskId = (id) => ({
  type: SAVE_TASK_ID,
  id,
});
export const stopEditing = (id) => ({
  type: STOP_EDITING,
  id,
});
export const changeValueTask = (value) => ({
  type: CHANGE_VALUE_TASK,
  value,
});
export const changeValueForTaskEditing = (id, newValue) => ({
  type: CHANGE_VALUE_FOR_TASK_EDITING,
  id,
  newValue,
});
export const taskCompleted = (id) => ({
  type: TASK_COMPLETED,
  id,
});
export const activeError = (boolean) => ({
  type: ACTIVE_ERROR,
  boolean,
});
export const activeLoader = (boolean) => ({
  type: ACTIVE_LOADER,
  boolean,
});
