export const AUTH_LOG_IN_EMAIL_STARTED = 'AUTH_LOG_IN_EMAIL_STARTED';
export const AUTH_LOG_IN_EMAIL_FINISHED = 'AUTH_LOG_IN_EMAIL_FINISHED';
export const AUTH_LOG_IN_EMAIL_FAILED = 'AUTH_LOG_IN_EMAIL_FAILED';
export const AUTH_LOG_OUT = 'AUTH_LOG_OUT';

function logInByEmailStart() {
    return {
        type: AUTH_LOG_IN_EMAIL_STARTED
    };
}

function logInByEmailFinish(userData) {
    return {
        type: AUTH_LOG_IN_EMAIL_FINISHED,
        userData
    };
}

export function logInByEmail(email, password) {
    return (dispatch) => {
        dispatch(logInByEmailStart(email, password));

        setTimeout(() => {
            dispatch(logInByEmailFinish({
                email
            }));
        }, 300000);

        return {};
    };
}

export function logOut() {
    return {
        type: AUTH_LOG_OUT
    };
}
