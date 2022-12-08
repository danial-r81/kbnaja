import React, { ReactNode } from 'react';
import Navbar from '../../navbar/Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
   return (
      <div className='w-full'>
         <Navbar />
         {children}
      </div>
   );
};

export default Layout;
