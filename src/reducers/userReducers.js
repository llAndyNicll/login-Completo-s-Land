
const initialState = {};

export const userReducers = ( state = initialState, action ) => {

    switch ( action.type ) {

        case 'LOGIN_USER':
        return {
            ...state,
            ...action.payload,
            isLoggedIn: true,
        };

        case 'LOGOUT_USER':
        return {

            isLoggedIn: false,
        };

        default:
        return state;
    }
}