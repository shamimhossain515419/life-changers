import Navbar from '@/Components/NavBar/NavBar';
import React from 'react';

const layout = ({ children }) => {
     return (
          <div>
               <Navbar></Navbar>

               <div >
                    {children}
               </div>

          </div>
     );
};

export default layout;