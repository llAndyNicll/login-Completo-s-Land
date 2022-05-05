import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { errorClear, errorMsg, startRegister } from '../../action/auth';

import '../auth/auth.css';

export const RegisterScreen = () => {

  const error = useSelector( state => state.error );

  const location = useLocation();

  const dispatch = useDispatch();

  const [ inputValue, handleInputChange ] = useForm({

    name: 'Test2',
    email: 'test12@test.com',
    password: '123456',
    password2: '123456'

  });

  const { name, email, password, password2 } = inputValue;

  const handleRegister = ( e ) => {

    e.preventDefault();

    if ( isFormValid() ) {

      dispatch( startRegister( name, email, password ) );

    };
  };

  const isFormValid = () => {
      
      if ( !validator.isEmail( email ) ) {
  
        dispatch( errorMsg( 'El correo electrónico no es valido.' ) );
  
        return false;
  
      } else if ( password.length < 5 ) {
  
        dispatch( errorMsg( 'La contraseña debe tener al menos 6 caracteres.' ) );
  
        return false;
  
      } else if ( password !== password2 ) {

        dispatch( errorMsg( 'Las contraseñas no coinciden.' ) );

        return false;

      }
  
      return true;
  
  };

  const handleGoogleRegister = () => {

    console.log( 'Google Register' );

  };

  const handleFacebookRegister = () => {
      
    console.log( 'Facebook Register' );
  
  };

  const handleTwitterRegister = () => {
      
    console.log( 'Twitter Register' );
  
  };

  useEffect( () => {

    dispatch( errorClear() );

  }, [ location.pathname, dispatch ] )

  return (
    <div className='login-body'>
      <div className='login-container'>
        <div className='login-container-row'>

          <div className='login-box animate__animated animate__fadeInDown animate__delay-0.3s'>
            <div className='login-box-container'>
              <div className='login-box-row'>

                <div className='login-box-col1'>
                  <div className='login-box-col1-container'>
                    <div className='login-box-col1-row'>
                      <ul className='login-ul'>

                        <li className='login-li'>                      
                          <h1 className='login-box-col1-title'>Completo's Land</h1>
                        </li>

                        <li className='login-li'>
                          <p className='login-box-col1-parrafo'>Bienvenido a Completo's Land!, por favor inicia sesion para poder continuar. </p>
                        </li>

                        <li className='login-li'>
                          <p className='login-box-col1-redes'>Registrate con redes sociales</p>
                        </li>

                        <li className='login-li'>
                          <ul className='login-redes-sociales'>

                            <li className='login-redes-sociales-li'>
                              <img 
                                onClick={ handleGoogleRegister }
                                className='login-redes-sociales-img' 
                                src='https://cdn-icons-png.flaticon.com/512/300/300221.png' 
                                alt='google' 
                              />
                            </li>

                            <li className='login-redes-sociales-li'>
                              <img
                                onClick={ handleFacebookRegister } 
                                className='login-redes-sociales-img' 
                                src='https://cdn-icons-png.flaticon.com/512/174/174848.png' 
                                alt='facebook' 
                              />
                            </li>

                            <li className='login-redes-sociales-li'>
                              <img
                                onClick={ handleTwitterRegister } 
                                className='login-redes-sociales-img' 
                                src='https://cdn-icons-png.flaticon.com/512/733/733579.png' 
                                alt='twitter' 
                              />
                            </li>

                          </ul>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                <div className='login-box-col2'>
                  <div className='login-box-col2-container'>
                    <form 
                      onSubmit={ handleRegister } 
                      className='login-box-col2-row'
                    >
                      <ul className='login-input'>

                        <li className='login-input-li'>
                          <h1>Register</h1>
                        </li>

                        <li className='login-input-li'>
                          <input 
                            autoComplete='off'
                            className='login-input-input' 
                            type='text' 
                            placeholder='Nombre' 
                            required='required'
                            name='name'
                            value={ name }
                            onChange={ handleInputChange }
                          />
                        </li>

                        <li className='login-input-li'>
                          <input
                            autoComplete='off' 
                            className='login-input-input separacion' 
                            type='email' 
                            placeholder='Correo'
                            required='required'
                            name='email'
                            value={ email }
                            onChange={ handleInputChange } 
                          />
                        </li>

                        <li className='login-input-li'>
                          <input 
                            autoComplete='off'
                            className='login-input-input separacion' 
                            type='password' 
                            placeholder='Contraseña' 
                            required='required'
                            name='password'
                            value={ password }
                            onChange={ handleInputChange }
                          />
                        </li>

                        <li className='login-input-li'>
                          <input 
                            autoComplete='off'
                            className='login-input-input separacion' 
                            type='password' 
                            placeholder='Confirmar contraseña' 
                            required='required'
                            name='password2'
                            value={ password2 }
                            onChange={ handleInputChange }
                          />
                        </li>

                        {
                          error.error ? (

                            <li className='login-input-li animate__animated animate__fadeIn animate__delay-0.3s'>
                              <h2 className='login-input-error'>
                                { error.msg }
                              </h2>
                            </li>

                          ) : null
                        }

                        <li className='login-input-li'>
                          <button type='submit' className={ 'login-input-button ' + ( error ? 'separacion-button1' : 'separacion-button' ) }>
                            Enviar
                          </button>
                        </li>

                        <li className='login-input-li'>
                          <p className='login-input-parrafo'>¿Ya tienes una cuenta? <Link className='registrate' to='/login'>Inicia sesion</Link></p>
                        </li>

                      </ul>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
