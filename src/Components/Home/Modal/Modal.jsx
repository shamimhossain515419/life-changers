import Link from 'next/link';
import React from 'react';
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi';

const Modal = ({ user, handleLogOut,setOpenModal,openModal }) => {
     return (
          <div className={`fixed top-16 bgColor z-50  ${ openModal ? "transform translate-x-0" : "transform translate-x-full"}  text-black translate-x-1  translate-0 duration-300  rounded-lg right-0  my-5 h-[40vh] w-[350px] p-4  `}>
               <div onClick={()=>setOpenModal(false)} className='    absolute      top-1 right-2 py-4 cursor-pointer  '>

                    <AiOutlineClose className=' text-xl text-red-600  font-medium    w-full' size={24}></AiOutlineClose>
               </div>

               <div className=' pt-5'>
                    <h1 className='text-lg font-medium my-1 secondary text-center'> {user?.displayName} </h1>
                    <h1 className='text-lg font-medium my-1 secondary text-center'> {user?.email} </h1>
                    <div>
                         <div className=' my-2'>
                              <Link
                                   href="/dashboard/setting"
                                   className={`bg-[#8d9ddc2c] shadow flex hover:bg-[#1a4bde] hover:text-white    items-center   py-1 px-2 rounded-md gap-3`}

                              >
                                   <AiOutlineHome size={24}></AiOutlineHome>
                                   <h1 className=' text-base md:text-lg f font-normal '> Dashboard </h1>
                              </Link>
                         </div>

                         <div className=' my-2'>
                              <Link
                                   href="/dashboard/setting"
                                   className={` flex bg-[#8d9ddc2c]  shadow  hover:bg-[#1a4bde] hover:text-white   items-center   py-1 px-2 rounded-md gap-3`}

                              >
                                   <FiSettings size={24}></FiSettings>
                                   <h1 className=' text-base md:text-lg f font-normal '> setting </h1>
                              </Link>
                         </div>
                         <div className=' my-2'>
                              <div
                                   onClick={handleLogOut}
                                   className={`bg-[#8d9ddc2c] shadow flex hover:bg-[#1a4bde] hover:text-white   items-center   py-1 px-2 rounded-md gap-3`}

                              >
                                   <BiLogOut size={24}></BiLogOut>
                                   <h1 className=' text-base md:text-lg f font-normal '> Logout </h1>
                              </div>
                         </div>

                    </div>
               </div>
          </div>
     );
};

export default Modal;