import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

// here is the names in state
export default combineReducers({
  auth_reduce: authReducer,
  form: formReducer,
  streams: streamReducer
});

