import { combineReducers } from 'redux';
import { authStateReducer } from 'redux-oauth';
import { routerReducer } from 'react-router-redux';

import authReducer from './authReducer';
import projectsReducer from './projectsReducer';
import currenciesReducer from './currenciesReducer';

export default combineReducers({
    routing: routerReducer,
    auth: authStateReducer,
    user: authReducer,
    projects: projectsReducer,
    currencies: currenciesReducer
});
