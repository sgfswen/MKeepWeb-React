import {
    AUTH_LOG_IN_EMAIL_STARTED,
    AUTH_LOG_IN_EMAIL_FINISHED,
    AUTH_LOG_IN_EMAIL_FAILED,
    AUTH_LOG_OUT,
    GET_USER_PROFILE_STARTED,
    GET_USER_PROFILE_FINISHED,
    GET_USER_PROFILE_FAILED,
    CREATE_NEW_ACCOUNT_STARTED,
    CREATE_NEW_ACCOUNT_FINISHED,
    CREATE_NEW_ACCOUNT_FAILED
} from 'redux/actions/authActions';

/**
 *  {
 *      isAuthorized: true,
 *      fetching: {
 *          inProgress: false,
 *          error: null
 *      },
 *      data: {
 *          email: 'some@email.com',
 *          name: 'User'
 *      }
 *  }
 */
const initialState = {
    isAuthorized: false,
    fetching: {
        inProgress: false,
        error: null
    },
    data: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_LOG_IN_EMAIL_STARTED:
            return Object.assign({}, state, {
                fetching: Object.assign({}, state.fetching, {
                    inProgress: true
                })
            });
        case AUTH_LOG_IN_EMAIL_FINISHED:
            return Object.assign({}, state, {
                isAuthorized: true,
                fetching: Object.assign({}, state.fetching, {
                    inProgress: false,
                    error: null
                })
            });
        case AUTH_LOG_IN_EMAIL_FAILED:
            return Object.assign({}, state, {
                isAuthorized: false,
                fetching: Object.assign({}, state.fetching, {
                    inProgress: false,
                    error: action.error
                }),
                data: {}
            });
        case AUTH_LOG_OUT:
            return Object.assign({}, state, {
                isAuthorized: false,
                data: {}
            });
        case GET_USER_PROFILE_STARTED:
            return Object.assign({}, state, {
                data: {}
            });
        case GET_USER_PROFILE_FINISHED:
            return Object.assign({}, state, {
                data: action.data
            });
        case GET_USER_PROFILE_FAILED:
            return Object.assign({}, state, {
                data: {}
            });
        case CREATE_NEW_ACCOUNT_STARTED:
            return Object.assign({}, state, {
                fetching: Object.assign({}, state.fetching, {
                    inProgress: true
                })
            });
        case CREATE_NEW_ACCOUNT_FINISHED:
            return Object.assign({}, state, {
                isAuthorized: true,
                fetching: Object.assign({}, state.fetching, {
                    inProgress: false,
                    error: null
                })
            });
        case CREATE_NEW_ACCOUNT_FAILED:
            return Object.assign({}, state, {
                isAuthorized: false,
                fetching: Object.assign({}, state.fetching, {
                    inProgress: false,
                    error: action.error
                }),
                data: {}
            });
        default:
            return state;
    }
}
