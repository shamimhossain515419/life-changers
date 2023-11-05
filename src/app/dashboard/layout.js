'use client'
import { AuthContext } from '@/GlobaState';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { IoMdNotificationsOff } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import ImageComponent from '@/Components/ImageComponents';
import Dashboard from '@/Components/dashbaordNaver/DashbardNaver';
import * as FaIcons from 'react-icons/fa';
const layout = ({ children }) => {

     const pathname = usePathname();
     const { user, openModal, setOpenModal } = useContext(AuthContext)
     return (
          <div>
               <div className=' md:ml-[300px] bgColor p-2 flex justify-between items-center gap-1 md:gap-4'>
                    <div>
                         <h1 className=' text-center text-2xl  md:hidden  font-bold primary  my-2 '> Life </h1>
                         <h1 className=' text-center text-2xl   hidden md:block font-bold primary  my-2 '> Banking </h1>
                    </div>
                    <div className=' hidden md:block'>
                         <div className=' relative  items-center md:w-[250px] xl:w-[300px]'>

                              <div className="input-wrapper">
                                   <FaSearch id="search-icon" />
                                   <input
                                        placeholder="Type to search..." />
                              </div>
                         </div>
                    </div>
                    <div className=' flex items-center gap-3 '>
                         <div className=' flex items-center gap-4 '>
                              <div className=' p-2 rounded-lg  shadow'>
                                   <AiOutlineMail size={24}></AiOutlineMail>
                              </div>
                              <div className=' p-2 rounded-lg  shadow'>
                                   <IoMdNotificationsOff size={24}></IoMdNotificationsOff>
                              </div>

                         </div>
                         <div className=' md:hidden'>
                              <div className=' p-2 rounded-lg  shadow'  >
                                   <FaIcons.FaBars size={24} onClick={()=>setOpenModal(true)} />
                              </div>
                         </div>
                         <div className=' hidden  md:block'>
                              <div className='     flex  items-center gap-3'>
                                   <div>
                                        <h1 className=' text-lg font-medium capitalize'> {user?.displayName}</h1>
                                        <span className=' secondary text-base font-normal'>Active</span>
                                   </div>
                                   <div>
                                        <ImageComponent width={" w-[50px] "} height={" h-[50px] "} rounded={" rounded-md"} photo={user?.photoURl}></ImageComponent>
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>

               <div className='    hidden md:block top-0  fixed   h-[1000px]  w-[300px] bgColor  p-2  '>
                    <div>
                         <div className=' py-3'>
                              <h1 className=' primary text-2xl font-semibold'>   Life changers</h1>
                         </div>
                         <div className=' py-3'>
                              <Link
                                   href="/dashboard"
                                   className={`${pathname == "/dashboard" ? " bg-[#1a4bde]  text-white" : "bg-[#8d9ddc2c]  "} flex   hover:bg-[#1a4bde]  hover:text-white items-center   py-2 px-2 rounded-md gap-3`}

                              >
                                   <AiOutlineHome size={24}></AiOutlineHome>
                                   <h1 className=' text-base md:text-lg f font-normal '> Dashboard </h1>
                              </Link>
                         </div>

                         <div className=' py-3'>
                              <Link
                                   href="/dashboard"
                                   className={`${pathname == "/dashboard" ? " bg-[#8d9ddc69] " : "bg-[#8d9ddc2c]  "} flex   hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                              >
                                   <AiOutlineHome size={24}></AiOutlineHome>
                                   <h1 className=' text-base md:text-lg f font-normal '> Life changers </h1>
                              </Link>
                         </div>
                         <div className=' py-3'>
                              <Link
                                   href="/dashboard"
                                   className={`${pathname == "/dashboard" ? " bg-[#8d9ddc69] " : "bg-[#8d9ddc2c]  "} flex   hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                              >
                                   <AiOutlineHome size={24}></AiOutlineHome>
                                   <h1 className=' text-base md:text-lg f font-normal '> Life changers </h1>
                              </Link>
                         </div>
                         <div className=' py-3'>
                              <Link
                                   href="/dashboard"
                                   className={`${pathname == "/dashboard" ? " bg-[#8d9ddc69] " : "bg-[#8d9ddc2c]  "} flex   hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                              >
                                   <AiOutlineHome size={24}></AiOutlineHome>
                                   <h1 className=' text-base md:text-lg f font-normal '> Life changers </h1>
                              </Link>
                         </div>

                    </div>
               </div>

               <div>
                    <div></div>
               </div>
               <div>
                    <div className=' relative  items-center    md:hidden  w-full  px-4 mt-3'>

                         <div className="input-wrapper">
                              <FaSearch id="search-icon" />
                              <input
                                   placeholder="Type to search..." />
                         </div>
                    </div>
               </div>

               <div className=' md:hidden'>
                    <Dashboard openModal={openModal} setOpenModal={setOpenModal}></Dashboard>
               </div>
               <div className=' md:ml-[300px] p-2'>

                    {children}
               </div>
          </div>
     );
};

export default layout;