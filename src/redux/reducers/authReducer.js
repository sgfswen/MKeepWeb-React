import {
    AUTH_LOG_IN_EMAIL_STARTED,
    AUTH_LOG_IN_EMAIL_FINISHED,
    AUTH_LOG_OUT
} from 'redux/actions/authActions';

const initialState = {
    isAuthorized: false,
    fetching: false,
    fetchError: null,
    personalData: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_LOG_IN_EMAIL_STARTED:
            return Object.assign({}, state, {
                fetching: true
            });
        case AUTH_LOG_IN_EMAIL_FINISHED:
            return Object.assign({}, state, {
                isAuthorized: true,
                fetching: false,
                personalData: action.userData
            });
        case AUTH_LOG_OUT:
            return Object.assign({}, state, {
                isAuthorized: false,
                personalData: {}
            });
        default:
            return state;
    }
}
