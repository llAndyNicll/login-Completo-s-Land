import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRouter = ({ children }) => {

    const user = useSelector( state => state.user );;

    return user.isLoggedIn
        ? <Navigate to='/' />
        : children

}
