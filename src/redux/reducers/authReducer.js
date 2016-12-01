import {
    AUTH_LOG_IN_EMAIL_STARTED,
    AUTH_LOG_IN_EMAIL_FINISHED
} from 'redux/actions/authActions';

const initialState = {
    authorized: false,
    fetching: false,
    fetchError: null,
    personalData: {
        email: null
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_LOG_IN_EMAIL_STARTED:
            console.info('AUTH_LOG_IN_EMAIL_STARTED');
            return Object.assign({}, state, {
                fetching: true
            });
        case AUTH_LOG_IN_EMAIL_FINISHED:
            console.info('AUTH_LOG_IN_EMAIL_FINISHED');

            return Object.assign({}, state, {
                authorized: true,
                fetching: false,
                personalData: action.userData
            });
        default:
            return state;
    }
}
