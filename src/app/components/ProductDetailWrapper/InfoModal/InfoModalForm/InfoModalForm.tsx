'use client';
import styles from './InfoModalForm.module.css';
import useInfoModalForm from './hooks/useInfoModalForm';

function InfoModalContent() {
  const { handleSubmit, onSubmit, register, errors, nameInputStyles, emailInputStyles, submitBtnStyles, leadResponse } = useInfoModalForm();
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
        {leadResponse.error && <span role='alert' className='error'>{leadResponse.error}</span>}
        <button type='submit' className={submitBtnStyles}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default InfoModalContent;
