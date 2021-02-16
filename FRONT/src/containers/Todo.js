/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import Todo from 'src/components/TodoList/Todo';

import {
  startEditing,
  removeTodo,
  changeValueTask,
  stopEditing,
  taskCompleted,
  activeError,
  changeValueForTaskEditing,
  saveTaskId,
} from 'src/store/actions';

const mapStateToProps = (state) => ({
  taskId: state.todoReducer.taskId,
  error: state.globalReducer.error,
  valueTask: state.todoReducer.value,
});

const mapDispatchToProps = (dispatch) => ({
  handleTask: (name, id) => {
    switch (name) {
      case 'isEditing':
        dispatch(startEditing(id));
        dispatch(saveTaskId(id));
        console.log('mode Edition ON');
        break;
      case 'isRemoving':
        dispatch(removeTodo(id));
        console.log('mode Suppression');
        break;
      case 'stopEditing':
        dispatch(stopEditing(id));
        console.log('mode Edition OFF');

        break;
      case 'completed':
        dispatch(taskCompleted(id));
        console.log('mode tâche Completé');

        break;
      default:
        console.log('pas d\'execution sur cette tâche ', name);
    }
  },
  setValueTask: (value) => {
    // controled field
    dispatch(changeValueTask(value));
  },
  submitForEditTask: (id, newValue) => {
    // change Value for each task edited
    dispatch(changeValueForTaskEditing(id, newValue));
  },
  handleError: (boolean) => {
    // if bad entry, send error for display a message at user
    dispatch(activeError(boolean));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
