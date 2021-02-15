import { connect } from 'react-redux';
import Counter from 'src/components/TodoList/Counter';

const mapStateToProps = (state) => ({
  tasks: state.todosReducer.tasks,
});

export default connect(mapStateToProps)(Counter);
