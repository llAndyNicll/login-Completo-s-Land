import { fetchSinToken } from "../helpers/fetch";

export const startLogin = ( email, password ) => {

    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/login', { email, password }, 'POST' );

        const body = await resp.json();

        if ( body.ok ) {

            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            dispatch( login({ ...body }));

            localStorage.setItem( 'user', JSON.stringify( body ) );

            dispatch( errorClear() );

        } else {

            const msg = body.msg || body.errors.errors[ 0 ].msg;

            dispatch( errorMsg( msg ));

        };

    };

};

export const startRegister = ( name, email, password ) => {

    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/register', { name, email, password }, 'POST' );

        const body = await resp.json();

        if ( body.ok ) {

            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            dispatch( login({ ...body }));

            dispatch( errorClear() );

        } else {

            const msg = body.msg || body.errors.errors[ 0 ].msg;

            dispatch( errorMsg( msg ));

        };

    };

};

export const startLogout = () => {

    return ( dispatch ) => {

        localStorage.clear();

        dispatch( logout() );

    };

};

export const errorMsg = ( msg ) => ({

    type: 'ERROR_MSG',
    payload: msg

});

export const errorClear = () => ({

    type: 'CLEAR_ERROR_MSG'

});

const login = ( user ) => ({

    type: 'LOGIN_USER',
    payload: user

});

const logout = () => ({

    type: 'LOGOUT_USER'

});
