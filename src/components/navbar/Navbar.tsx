import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Logo from '../../assets/LoginLogo.svg';

const Navbar = () => {
   const [btn, setBtn] = useState(false);
   return (
      <div className='w-full h-14 bg-white flex justify-between items-center relative'>
         <div
            className='w-[140px] h-full ml-3 flex justify-between items-center cursor-pointer'
            onClick={() => setBtn((prevState) => !prevState)}>
            <div className='flex justify-center items-center'>
               <IoIosArrowDown />
               <p className='text-lg pl-2'>امین رضایی</p>
            </div>
            <FaUserAlt />
         </div>
         <div
            className={`w-[130px] h-10 ${
               btn ? 'flex' : 'hidden'
            } justify-center items-center bg-white rounded-md absolute left-2 bottom-[-50px]`}>
            <button className='w-full h-full text-center'>خروج</button>
         </div>
         <div className='w-[100px] h-full'>
            <img className='w-full h-full' src={Logo} alt='' />
         </div>
      </div>
   );
};

export default Navbar;
