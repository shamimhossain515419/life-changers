import Container from '@/Components/Contianer/Container';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';

const Footer = () => {
     return (
          <div>

               <Container>
                    <div>

                         <div className=' px-20 grid  sm:grid-cols-3  md:grid-cols-4 xl:grid-cols-5  md:gap-4 xl:gap-5  '>
                              <div className=''>

                                   <div>
                                        <h1 className='text-lg md:text-lg xl:text-2xl font-bold '> Life changers</h1>
                                   </div>

                                   <p className='  my-6 text-base  md:text-lg  '>A modern ,technology-first bank built for you and your growing business.</p>
                                   <div className=' flex  gap-3 my-5 items-center '>
                                        <div className=' primary  rounded-full  border cursor-pointer p-1 border-[#415cd3]'>
                                             <FaGoogle size={24}></FaGoogle>
                                        </div>
                                        <div className=' primary  rounded-full  border cursor-pointer p-1 border-[#415cd3]'>
                                             <FaFacebook size={24}></FaFacebook>
                                        </div>
                                        <div className=' primary  rounded-full  border cursor-pointer p-1 border-[#415cd3]'>
                                             <FaInstagram size={24}></FaInstagram>
                                        </div>
                                        <div className=' primary  rounded-full  border cursor-pointer p-1 border-[#415cd3]'>
                                             <FaTwitter size={24}></FaTwitter>
                                        </div>

                                   </div>
                              </div>
                              <div className=' px-4 '>
                                   <h1 className='text-lg md:text-lg xl:text-2xl font-bold pb-2'> Company</h1>
                                   <div>
                                        <Link className=' my-1' href={'/'}>
                                             <h1>About Us </h1>
                                        </Link>
                                        <Link className=' my-1' href={'/'}>
                                             <h1>Awards </h1>
                                        </Link>
                                        <Link className=' my-1' href={'/'}>
                                             <h1>Careers</h1>
                                        </Link>
                                   </div>
                              </div>
                              <div className=' '>
                                   <h1 className='text-lg md:text-lg xl:text-2xl font-bold pb-2'> Useful Links</h1>
                                   <div>
                                        <Link className=' my-1' href={'/'}>
                                             <h1>Products </h1>
                                        </Link>
                                        <Link className=' my-1' href={'/'}>
                                             <h1> Business Loan </h1>
                                        </Link>
                                        <Link className=' my-1' href={'/'}>
                                             <h1>Careers</h1>
                                        </Link>
                                        <Link className=' my-1' href={'/'}>
                                             <h1>Blog</h1>
                                        </Link>
                                   </div>
                              </div>
                              <div className=' '>
                                   <h1 className='text-lg md:text-lg xl:text-2xl font-bold pb-2'> Support</h1>
                                   <div>
                                        <Link className=' my-1' href={'/'}>
                                             <h1>Support @bankio</h1>
                                        </Link>
                                        <Link className=' my-1' href={'/'}>
                                             <h1>Contact Us </h1>
                                        </Link>
                                        <Link className=' my-1' href={'/'}>
                                             <h1>FAQ</h1>
                                        </Link>
                                   </div>
                              </div>
                              <div className=' '>
                                   <h1 className='text-lg md:text-lg xl:text-2xl font-bold pb-2 '> Subscribe</h1>
                                   <div>
                                        <div className=' py-2'>
                                             <input className='  w-full   rounded-3xl w-ful border-none py-2  px-3 text-base outline-none border border-[#3d58df] outline outline-[#3d58df]' type="text" placeholder='Enter Your Email  address' name="" id="" />
                                        </div>
                                        <div className=' py-2'>
                                             <button className="btn  w-full block px-5 btn-gradient-border btn-glow text-white"> Subscribe</button>
                                        </div>
                                   </div>
                                   <p className='  my-6 text-base  md:text-lg '> Get the latest updates via email. Any time you may unsubscribe</p>
                              </div>

                         </div>

                    </div>

                    <div>
                         <div className='h-[1px] primaryBg' />

                         <div className=' flex justify-between items-center gap-2 my-4'>
                              <h1 className=' text-lg   font-medium'> Copyright © Life  <span className='  primary'> Changers</span></h1>
                              <div  className=' text-lg   font-medium'>
                                   <Link className=' border-r border-[#5642ed] px-4' href={'/'}>Privacy</Link>
                                   <Link href={'/'}>PrivacyTerms & Condition</Link>
                              </div>
                         </div>
                    </div>


               </Container>



          </div>
     );
};

export default Footer;



