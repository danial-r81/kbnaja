import React, { ReactNode } from 'react';
import { ErrorMessage, Field } from 'formik';
interface InputProps {
   name: string;
   placeholder: string;
   type: string;
}
const TextError = ({ children }: { children: ReactNode }) => {
   return (
      <div className='w-full absolute right-0 top-6 text-rose-800'>
         {children}
      </div>
   );
};

export const Button = ({ children }: { children: ReactNode }) => {
   return (
      <button
         type='submit'
         className='w-[140px] my-3 py-1 flex justify-center items-center bg-gradient-to-tr from-yellow-200 to-yellow-300 rounded-md transition-all duration-200 hover:shadow-md hover:-translate-y-[1.5px]'>
         {children}
      </button>
   );
};

const Input = ({ name, placeholder, type }: InputProps) => {
   return (
      <div className='w-full relative my-12 flex flex-col justify-center items-center '>
         <Field
            className='w-full border-b border-white bg-transparent outline-none z-10 placeholder:text-white placeholder:pr-1 text-white'
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
         />
         <ErrorMessage
            name={name}
            render={(name) => <TextError>{name}</TextError>}
         />
      </div>
   );
};

export default Input;
