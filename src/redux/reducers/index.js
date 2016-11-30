import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import timeReducer from './timeReducer';
import { authStateReducer } from 'redux-oauth';
import authReducer from './authReducer';

export default combineReducers({
    counter: counterReducer,
    time: timeReducer,
    auth: authStateReducer,
    user: authReducer
});
