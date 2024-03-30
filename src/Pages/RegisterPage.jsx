import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import notify from '../components/ToastNotifications';
import '../components/RegisterPage/styles/RegisterPage.css'
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const { handleSubmit, reset, register } = useForm();
  const { createNewUser, error } = useAuth();
  const navegate = useNavigate()

  useEffect(() => {
    if (error) {
      notify(error, 'error');
    }
  }, [error]);

  const submit = data => {
    createNewUser(data);
    reset({
      firstName: '',
      lastName: '',
      password: '',
      gender: 'OTHER',
      email: '',
    });

  };

  navegate('/login')

  return (
    <div className='register__container'>
      <h2 className='register__title'>Registro</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label className='register__label__firstName'>
          <span>First Name</span>
          <input className="register__inputs" {...register('firstName')} type="text" />
        </label>
        <label className='register__label__lastName'>
          <span>Last Name</span>
          <input className="register__inputs" {...register('lastName')} type="text" />
        </label>
        <label className='register__label__email'>
          <span>Email</span>
          <input className="register__inputs" {...register('email')} type="email" />
        </label>
        <label className='register__label__email'>
          <span>Password</span>
          <input className="register__inputs" {...register('password')} type="password" />
        </label>
        <label className='register__label__gender'>
          <span>Gender</span>
          < select {...register('gender')}>
            <option value="OTHER">prefet not say</option>  
            <option value="MALE">male</option>
            <option value="FEMALE">female</option>
          </select>
        </label>
        <button className='register__button'>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage