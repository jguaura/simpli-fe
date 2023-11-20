'use client';
import { createLead } from '@/app/actions/create-leads';
import { Lato } from 'next/font/google';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './InfoModalForm.module.css';
import useInfoModalForm from './hooks/useInfoModalForm';

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });
function InfoModalContent() {
  const { handleSubmit, onSubmit, register, errors, nameInputStyles, emailInputStyles, submitBtnStyles } = useInfoModalForm();
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className='form-control'>
          <label htmlFor='name'>Your name</label>
          <input
            className={nameInputStyles}
            {...register('name', { required: 'Please enter your name' })}
            placeholder='Name'
          />
          {errors.name && <span role='alert'>{errors.name.message}</span>}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Your email</label>
          <input
            className={emailInputStyles}
            placeholder='Email'
            {...register('email', {
              required: 'Please enter your email',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email adresss'
              }
            })}
          />
          {errors.email && <span role='alert'>{errors.email.message}</span>}
        </div>
        <button type='submit' className={submitBtnStyles}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default InfoModalContent;
