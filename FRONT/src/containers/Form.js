import { connect } from 'react-redux';
import Form from 'src/components/TodoList/Form';

import {
  addTask,
  handleValue,
  activeError,
} from 'src/store/actions';

const mapStateToProps = (state) => ({
  value: state.todosReducer.value,
  error: state.globalReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  submitForAddTask: (task) => {
    dispatch(addTask(task));
  },
  setValue: (value) => {
    dispatch(handleValue(value));
  },
  handleError: (boolean) => {
    dispatch(activeError(boolean));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
