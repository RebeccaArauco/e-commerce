import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './styles/login.css'

const Login = () => {

  const [hasToken, setHasToken] = useState();
  const loginUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setHasToken(localStorage.getItem('token'));
  }, [])
  

  const {handleSubmit, register, reset} = useForm();

  const submit = async(data) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
    await loginUser(url, data);
    reset ({
      email: '',
      password:'',
    });
      setHasToken(localStorage.getItem('token'));
    setTimeout(() => {
      navigate('/cart');
    }, 2000);
    
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    setHasToken();
  }


  return (
    <>
    {
      hasToken ? (
      <div className='logout__container'>
      <button className='logout__btn' onClick={handleLogout}>Logout</button>
      </div>
      ) : (
    <div className='login__container'>
      <h1 className='login__msg'>Welcome! Enter your email and password to continue</h1>
    <form className='login__form' onSubmit={handleSubmit(submit)}>
      <div className='login__formit'>
        <label htmlFor="email">Email</label>
        <input {...register('email')} id='email' type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} id='password' type="password" />
      </div>
      <button className='login__btn'>Login</button>
    </form>
    <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
    </div>
  )}
  </>
  )
}

export default Login;