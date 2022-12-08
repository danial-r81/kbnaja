import { Field } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../formContainer/Form';
import Input, { Button } from '../formContainer/Input';

const Login = () => {
   return (
      <FormContainer
         title='ورود به سامانه'
         initialValues={{
            username: '',
            password: '',
         }}>
         <div className='w-full px-6 sm:px-10'>
            <Input name='username' type='string' placeholder='نام کاربری' />
            <Input name='password' type='string' placeholder='رمز عبور' />
            <div className='flex items-center mb-4'>
               <input
                  id='rememberMe'
                  name='rememberMe'
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 rounded'
               />
               <label
                  htmlFor='rememberMe'
                  className='ml-2 text-base font-medium text-white mr-2'>
                  مرا به خاطر بسپار
               </label>
            </div>
         </div>
         <div className='w-full flex flex-col justify-center items-center mb-5'>
            <Button>ورود</Button>
            <Link
               to='register'
               className='w-[140px] px-10 py-1 text-white border-[3px] rounded-md border-yellow-300 flex justify-center items-center transition-all hover:shadow-md hover:-translate-y-[1.5px]'>
               ثبت نام
            </Link>
            <Link
               to='/forgetPassword'
               className='text-white hover:text-slate-200 mt-4'>
               فراموشی رمز عبور
            </Link>
         </div>
      </FormContainer>
   );
};

export default Login;
