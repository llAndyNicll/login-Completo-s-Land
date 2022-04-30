import Swal from "sweetalert2";
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

        } else {

            // El error se debe de manejar en a base de redux y en el backend. y mostrarlo en el componente.

            // Swal.fire( 'Error', body.msg, 'error' );

            console.log( 'Error', body.msg );

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

        } else {

            // El error se debe de manejar en a base de redux y en el backend. y mostrarlo en el componente.

            // Swal.fire( 'Error', body.msg, 'error' );

            console.log( 'Error', body.msg );

        };

    };

};

export const startLogout = () => {

    return ( dispatch ) => {

        localStorage.clear();

        dispatch( logout() );

    };

};

const login = ( user ) => ({

    type: 'LOGIN_USER',
    payload: user

});

const logout = () => ({

    type: 'LOGOUT_USER'

});