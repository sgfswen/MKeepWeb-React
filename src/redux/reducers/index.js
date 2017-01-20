import { combineReducers } from 'redux';
import { authStateReducer } from 'redux-oauth';
import { routerReducer } from 'react-router-redux';

import authReducer from './authReducer';
import projectsReducer from './projectsReducer';

export default combineReducers({
    auth: authStateReducer,
    user: authReducer,
    projects: projectsReducer,
    routing: routerReducer
});
