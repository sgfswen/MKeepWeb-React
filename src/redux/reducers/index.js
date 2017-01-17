import { combineReducers } from 'redux';
import { authStateReducer } from 'redux-oauth';
import authReducer from './authReducer';

export default combineReducers({
    auth: authStateReducer,
    user: authReducer
});
