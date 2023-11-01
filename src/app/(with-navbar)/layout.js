import Navbar from '@/Components/NavBar/NavBar';
import React from 'react';

const layout = ({ children }) => {
     return (
          <div>
          <Navbar></Navbar>

               {children}
               
          </div>
     );
};

export default layout;