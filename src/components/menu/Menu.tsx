import React, { ReactNode } from 'react';
import {
   FaRegMoneyBillAlt,
   FaUserCheck,
   FaUserPlus,
   FaUserTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuItem = ({
   text,
   route,
   icon,
}: {
   text: string;
   route: string;
   icon: ReactNode;
}) => {
   return (
      <li className='sm:w-[350px] w-full flex justify-between my-5 items-center bg-white rounded-md transition-all duration-200 hover:shadow-md hover:-translate-y-[2px]'>
         <Link
            className='w-full py-3 flex items-center justify-center'
            to={`/requests/${route}`}>
            {icon}
            <p className='pr-2 text-sm sm:text-base'>{text}</p>
         </Link>
      </li>
   );
};

const Menu = () => {
   return (
      <div
         className='w-full h-screen flex justify-center items-center bg-gradient-to-tr from-green-200 to-green-300'
         dir='rtl'>
         <div className='sm:w-[50%] w-[90%] h-[60vh]'>
            <ul className='w-full flex flex-col justify-center items-center'>
               <MenuItem
                  icon={<FaUserPlus size={18} />}
                  text='درخواست صدور کارت شناسایی'
                  route='IdentificationcardRequest'
               />
               <MenuItem
                  icon={<FaRegMoneyBillAlt size={18} />}
                  text='درخواست وام'
                  route='RequestLoan'
               />
               <MenuItem
                  icon={<FaUserCheck size={18} />}
                  text='درخواست برقراری عضویت'
                  route='ReMembershipRequest'
               />
               <MenuItem
                  icon={<FaUserTimes size={18} />}
                  text='درخواست قطع عضویت '
                  route='CutOfMembershipRequest'
               />
            </ul>
         </div>
      </div>
   );
};

export default Menu;
