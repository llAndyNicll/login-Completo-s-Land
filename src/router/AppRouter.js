import React, { useEffect, useState } from "react";
import { InicioScreen } from "../componentes/inicio/InicioScreen";
import { LoginScreen } from "../componentes/auth/LoginScreen";
import { RegisterScreen } from "../componentes/auth/RegisterScreen";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { useDispatch } from "react-redux";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState( true );

  const user = JSON.parse( localStorage.getItem( 'user' ) );

  useEffect( ()  => {

    if ( user?.user.uid ) {

      dispatch( { type: 'LOGIN_USER', payload: user } );
  
    };
  
    setChecking( false );

  }, [ dispatch, user ] );

  if ( checking ) {

    return <h5>Espere...</h5>

  };

  return (
    <BrowserRouter>
        <div>
            <Routes>

              <Route path='/login' element={ 
                <PublicRouter>

                  <LoginScreen />

                </PublicRouter> 
              } />

              <Route path='/register' element={ 
                <PublicRouter>

                  <RegisterScreen />

                </PublicRouter> 
              } />

              <Route path='/' element={ 
                <PrivateRouter>

                  <InicioScreen />

                </PrivateRouter> 
              } />

            </Routes>
        </div>
    </BrowserRouter>
  );
};
