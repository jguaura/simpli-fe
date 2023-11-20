'use client';
import { createLead } from '@/app/actions/create-leads';
import { Lato } from 'next/font/google';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './InfoModalContent.module.css';

type Inputs = {
  name: string;
  email: string;
};
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });
function InfoModalContent() {
  const [leadResponse, setLeadResponse] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await createLead(data);
    setLeadResponse(response);
  };

  const submitBtnStyles = `${styles.submitBtn} btn`;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className='form-control'>
          <label htmlFor='name'>Your name</label>
          <input className={lato.className} {...register('name')} placeholder='Name' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Your email</label>
          <input
            className={lato.className}
            placeholder='Email'
            {...register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format'
              }
            })}
          />
          {errors.email && <span role='alert'>{errors.email.message}</span>}
        </div>
        <button type='submit' className={submitBtnStyles}>
          submit
        </button>
      </form>
    </div>
  );
}

export default InfoModalContent;
