export const AUTH_LOG_IN_EMAIL = 'AUTH_LOG_IN_EMAIL';

export function logInByEmail(email, password) {
    return {
        type: AUTH_LOG_IN_EMAIL,
        email,
        password
    };
}
