import { AUTH_LOG_IN_EMAIL } from 'redux/actions/authActions';

const initialState = {
    authorized: false,
    name: null,
    email: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_LOG_IN_EMAIL:
            return {
                authorized: true,
                name: 'Some User',
                email: action.email
            };
        default:
            return state;
    }
}
