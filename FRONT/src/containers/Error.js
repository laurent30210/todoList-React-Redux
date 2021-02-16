import { connect } from 'react-redux';
import Error from 'src/components/Error';

const mapStateToProps = (state) => ({
  error: state.globalReducer.error,
});

export default connect(mapStateToProps)(Error);
