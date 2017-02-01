import { Authorization, ProfileRepository } from 'repositories';
import { getProjectsList } from 'redux/actions/projectsActions';

const auth = new Authorization();
const profileRep = new ProfileRepository();

export const AUTH_LOG_IN_EMAIL_STARTED = 'AUTH_LOG_IN_EMAIL_STARTED';
export const AUTH_LOG_IN_EMAIL_FINISHED = 'AUTH_LOG_IN_EMAIL_FINISHED';
export const AUTH_LOG_IN_EMAIL_FAILED = 'AUTH_LOG_IN_EMAIL_FAILED';
export const AUTH_LOG_OUT = 'AUTH_LOG_OUT';
export const CREATE_NEW_ACCOUNT_STARTED = 'CREATE_NEW_ACCOUNT_STARTED';
export const CREATE_NEW_ACCOUNT_FINISHED = 'CREATE_NEW_ACCOUNT_FINISHED';
export const CREATE_NEW_ACCOUNT_FAILED = 'CREATE_NEW_ACCOUNT_FAILED';
export const GET_USER_PROFILE_STARTED = 'AUTH_LOG_IN_EMAIL_STARTED';
export const GET_USER_PROFILE_FINISHED = 'GET_USER_PROFILE_FINISHED';
export const GET_USER_PROFILE_FAILED = 'GET_USER_PROFILE_FAILED';

/* Log in by email */
export function logInByEmail(email, password) {
    return (dispatch) => {
        dispatch(logInByEmailStart(email, password));

        auth.logInByEmail(email, password)
            .then(() => {
                dispatch(logInByEmailFinished());
                dispatch(getUserProfile());
            })
            .catch((error) => {
                dispatch(logInByEmailFailed(error));
            });
    };
}

function logInByEmailStart() {
    return {
        type: AUTH_LOG_IN_EMAIL_STARTED
    };
}

function logInByEmailFinished(userData) {
    return {
        type: AUTH_LOG_IN_EMAIL_FINISHED,
        userData
    };
}

function logInByEmailFailed(error) {
    return {
        type: AUTH_LOG_IN_EMAIL_FAILED,
        error
    };
}

/* Get user profile */
export function getUserProfile() {
    return (dispatch) => {
        dispatch(getUserProfileStart());

        profileRep.getProfile()
            .then((data) => {
                dispatch(getUserProfileFinished(data));
                dispatch(getProjectsList());
            })
            .catch((error) => {
                dispatch(getUserProfileFailed(error));
            });
    };
}

function getUserProfileStart() {
    return {
        type: GET_USER_PROFILE_STARTED
    };
}

function getUserProfileFinished(data) {
    return {
        type: GET_USER_PROFILE_FINISHED,
        data
    };
}

function getUserProfileFailed(error) {
    return {
        type: GET_USER_PROFILE_FAILED,
        error
    };
}

/* Create new account */
export function createNewAccount(email, password) {
    return (dispatch) => {
        dispatch(createNewAccountStart(email, password));

        auth.createNewAccount(email, password)
            .then(() => {
                dispatch(createNewAccountFinished());
                logInByEmail(email, password);
            })
            .catch((error) => {
                dispatch(createNewAccountFailed(error));
            });
    };
}

function createNewAccountStart() {
    return {
        type: CREATE_NEW_ACCOUNT_STARTED
    };
}

function createNewAccountFinished(data) {
    return {
        type: CREATE_NEW_ACCOUNT_FINISHED,
        data
    };
}

function createNewAccountFailed(error) {
    return {
        type: CREATE_NEW_ACCOUNT_FAILED,
        error
    };
}

/* Log out */
export function logOut() {
    return {
        type: AUTH_LOG_OUT
    };
}
