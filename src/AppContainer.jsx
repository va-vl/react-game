import { connect } from 'react-redux';
import { setUserNameAC } from './store/authReducer/authActionCreators';
import App from './App';

const mapStateToProps = (state) => ({
  userName: state.authReducer.userName,
});

const mapDispatchToProps = (dispatch) => ({
  setUserName: (data) => {
    dispatch(setUserNameAC(data));
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
