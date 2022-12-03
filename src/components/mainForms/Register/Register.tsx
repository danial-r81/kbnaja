import React from 'react';
import FormContainer from '../formContainer/Form';
import Input, { Button } from '../formContainer/Input';
import { Link } from 'react-router-dom';

const Register = () => {
   return (
      <FormContainer
         title='ثبت نام در سامانه'
         initialValues={{
            username: '',
         }}>
         <div className='w-full px-6 sm:px-10'>
            <Input name='username' type='string' placeholder='نام کاربری' />
         </div>
         <div className='w-full flex flex-col justify-center items-center mb-5'>
            <Button>ثبت</Button>
            <Link to='/' className='text-white hover:text-slate-200 mt-4'>
               قبلا ثبت نام کرده اید؟
            </Link>
         </div>
      </FormContainer>
   );
};

export default Register;
