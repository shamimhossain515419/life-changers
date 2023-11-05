import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


import './index.css';
import { IconContext } from 'react-icons';
import { SidebarData } from '@/utils/dashbaord';
import Link from 'next/link';

function Dashboard({ openModal,setOpenModal }) {


     return (
          <>


               <nav className={openModal ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items bg-[#F5FAFF] text-black' onClick={() => setOpenModal(false)}>
                         <li className='navbar-toggle'>
                              <Link href='#' className='  menu-bars'>
                                   <AiIcons.AiOutlineClose />
                              </Link>
                         </li>
                         {SidebarData.map((item, index) => {
                              return (
                                   <li key={index} className={item.cName}>
                                        <Link href={item.path}>
                                             {item.icon}
                                             <span>{item.title}</span>
                                        </Link>
                                   </li>
                              );
                         })}
                    </ul>
               </nav>

          </>
     );
}

export default Dashboard;