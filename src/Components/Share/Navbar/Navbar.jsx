
"use client"
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaBars } from "react-icons/fa"
import { useState } from "react";
;
import Menubar from './Menubar';
import Link from 'next/link';
import Image from 'next/image';
import Notification from '@/Components/Notification/Notification';
import Container from '@/Components/Contianer/Container';




const Navbar = () => {
     const user = null;
     const [Open, setOpen] = useState(true)
   return (
          <div>
               <nav className='px-2 w-full fixed py-3 z-50 bg-white      top-0  left-0 right-0    shadow-lg'>
                    <Container>
                         <div className=' '>
                              <div className=' flex justify-between items-center'>
                                   <div className=' flex  items-center gap-4'>
                                        {/* <img src={Logo} className=' h-12 w-12 hidden md:block ' alt="" />
                                         h1
                                          */}


                                        <Link href={'/'}>  <Image width={60} height={60} className=" h-12 w-12 md:hidden rounded-full object-cover" src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/SNwtsLW/download.jpg"} alt="img" /></Link>
                                        <Link href="/"> <h1 className='  py-2 font-semibold  text-base md:text-2xl text-color   uppercase'> Life changers </h1></Link>
                                   </div>
                                   <div className=' hidden md:flex items-center gap-3  space-x-5'>
                                        {
                                             user?.role == "Admin" ? (isAdmin == true ? <>
                                                  <Link href={'/'}> Home</Link>
                                                  <Link href={'/news'}>LatestNews</Link>
                                                  <Link href={'/myjewelry'}>My Jewelry</Link>
                                                  <Link href={'/addjewelry'}> Add jewelry</Link>

                                                  <Link href={'/blogs'}> Blogs</Link>
                                                  <Link href={'/contact'}> Contact Us</Link>
                                                  <button onClick={() => setIsAdmin(false)} className=" bgColor text-white  px-3 py-1 ">Admin view</button>
                                             </> : <>
                                                  <Link href={'/'}> Home</Link>
                                                  <Link href={'/news'}>LatestNews</Link>
                                                  <Link href={'/blogs'}> Blogs</Link>
                                                  <Link href={'/contact'}> Contact Us</Link>
                                                  {
                                                       user?.email ? <Link href={'/dashboard'}>Dashboard</Link> : null
                                                  }
                                                  <div>
                                                       <AiOutlineHeart size={24}></AiOutlineHeart>
                                                  </div>
                                                  <div className=" relative">
                                                       <AiOutlineShoppingCart className=" relative" size={24}></AiOutlineShoppingCart>
                                                  </div>
                                                  <button onClick={() => setIsAdmin(true)} className=" bgColor text-white  px-3 py-1 ">Client view</button>

                                             </>) : (<>

                                                  <Link href={'/'}> Home</Link>
                                                  <Link href={'/news'}>Latest News</Link>
                                                  <Link href={'/dashboard'}> Dashboard</Link>
                                                  <Link href={'/blogs'}> Blogs</Link>
                                                  <Link href={'/contact'}> Contact Us</Link>
                                                  {
                                                       user?.email ? <Link href={'/dashboard'}>Dashboard</Link> : null
                                                  }


                                             </>)


                                        }

                                        <div>
                                             {
                                                  user ? <div className=' cursor-pointer hidden md:block '>
                                                       <div className='   relative flex gap-2 items-center '>
                                                            <Image width={60} height={60} className=' relative h-10 w-10 rounded-full object-cover' src={user?.photoURL} alt="img" />
                                                            <div className=' absolute w-3 h-3  left-8 -top-1  bg-[rgb(1,179,31)] rounded-full '></div>
                                                            <div className=' relative  space-y-0'>
                                                                 <h1 className='relative  text-base'>{user?.displayName}</h1>
                                                                 <span className=' absolute -bottom-3 text-xs mt-4'> Active now</span>
                                                            </div>

                                                       </div>
                                                  </div> : <Link href={'/login'} className={'text-[#298742]'}> Login/Register</Link>
                                             }
                                        </div>

                                   </div>







                                   <div className=' md:hidden '>

                                        {
                                             Open ? <FaBars size={24} className=' '> </FaBars> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                             </svg>

                                        }

                                   </div>
                              </div>

                              <div className='md:hidden'>
                                   {
                                        Open ? "" : <Menubar setOpen={setOpen}></Menubar>
                                   }
                              </div>


                         </div>
                    </Container>

               </nav>
               <Notification></Notification>
          </div >
     );
};

export default Navbar;