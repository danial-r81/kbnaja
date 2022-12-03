import React, { ReactNode } from 'react';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import LoginLogo from '../../../assets/LoginLogo.svg';
import { Form, Formik, Field, FormikValues } from 'formik';

interface FormProps {
   title: string;
   children: ReactNode;
   initialValues: InitialValuesTypes;
}
interface InitialValuesTypes {
   username: string;
   password?: string;
}

const FormContainer: React.FC<FormProps> = ({
   title,
   children,
   initialValues,
}) => {
   const validationSchema = Yup.object().shape({
      username: Yup.string()
         .required('لطفا نام کاربری خود را وارد کنید')
         .min(3, 'نام کاربری باید حداقل 3 کارکتر باشد'),
      password: Yup.string()
         .required('لطفا رمز عبور خود را وارد کنید')
         .min(8, 'رمز عبور باید حداقل 8 کارکتر باشد'),
   });
   const onSubmit = (values: any) => {
      console.log(values);
   };
   return (
      <div dir='rtl' className='flex flex-col justify-center py-5 items-center'>
         <div className='w-full h-[40%] my-4 flex justify-center'>
            <img
               className='w-[40%] max-w-[220px] min-w-[170px] h-[80%]'
               src={LoginLogo}
               alt=''
            />
         </div>
         <motion.div className='w-[90%] sm:w-[450px] mt-4 bg-gradient-to-tr from-green-400 to-green-600 rounded-xl p-[5px]'>
            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={onSubmit}>
               <Form>
                  <div className='w-full mt-5 text-white text-2xl text-center'>
                     <h1>{title}</h1>
                  </div>
                  {children}
               </Form>
            </Formik>
         </motion.div>
      </div>
   );
};

export default FormContainer;
