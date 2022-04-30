import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../action/auth';

export const InicioScreen = () => {

  const user = useSelector(  state => state.user );

  const dispatch = useDispatch();

  const handleLogout = () => {

    dispatch( startLogout() );

  };

  return (
    <div>

        <h1>InicioScreen</h1>

        <button onClick={ handleLogout }>
          Logout
        </button>

        <h4> { user.user.name } </h4>

    </div>
  );
};
