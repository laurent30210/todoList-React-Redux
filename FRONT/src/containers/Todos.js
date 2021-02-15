import { connect } from 'react-redux';
import Todos from 'src/components/TodoList/Todos';

const mapStateToProps = (state) => ({
  tasks: state.todosReducer.tasks,
});

export default connect(mapStateToProps)(Todos);
