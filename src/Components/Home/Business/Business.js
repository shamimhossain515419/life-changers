import React from 'react';
import './Business.css'

import Image from 'next/image';
import business from '/public/image/business.webp'
import checking from '/public/image/checking.webp'
import savings from '/public/image/savings.webp'

import { AiOutlineArrowRight } from 'react-icons/ai';
import TitleBar from '@/Components/TitleBar/TitleBar';
import Container from '@/Components/Contianer/Container';
const Business = () => {
     return (
          <div className=' py-11 relative'>
               <div className='BusinessBg flex relative  justify-center items-center gap-2'>

                    <div>
                         <TitleBar aline={"text-center"} title={"Solutions for Every \n Business Need."} subtitle={"Open your account from anywhere in the world"} paragraph={"Power up your business with a full-stack online bank account that fits your needs."}></TitleBar>
                    </div>




               </div>

               <Container>
                    <div className='  relative   bottom-28  md:px-20 grid md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6'>

                         <div className=' bg-white  shadow p-4 rounded-2xl flex justify-center items-center flex-col'>
                              <div className=' mx-auto bg-[#F5FAFF] p-10 rounded-full'>
                                   <Image className=' max-w-[80px] max-h-[80px] rounded-full' width={100} height={100} src={checking} alt='image'></Image>
                              </div>
                              <div className=' text-center'>
                                   <h1 className=' text-xl md:text-2xl font-bold textColor'> Checking Account</h1>
                                   <p className=' text-base md:text-lg font-normal my-3'>Choose from our checking options that allow you to earn interest, avoid fees, and easily manage your account </p>
                                   <div className=' text-base md:text-lg primary  font-bold mx-auto text-center flex justify-center items-center gap-2 mt-5'>
                                        <p> Open Account</p>
                                        <AiOutlineArrowRight size={24}></AiOutlineArrowRight>
                                   </div>


                              </div>
                         </div>
                         <div className=' bg-white shadow p-4 rounded-2xl flex justify-center items-center flex-col'>
                              <div className=' mx-auto bg-[#F5FAFF] p-10 rounded-full'>
                                   <Image className=' max-w-[80px] max-h-[80px] rounded-full' width={100} height={100} src={savings} alt='image'></Image>
                              </div>
                              <div className=' text-center'>
                                   <h1 className=' text-xl md:text-2xl font-bold textColor'>Savings Accounts</h1>
                                   <p className=' text-base md:text-lg font-normal my-3'>Save for your goals and watch your money grow with a CD, a money market account, a savings account.Your future starts now</p>
                                   <div className=' text-base md:text-lg primary  font-bold mx-auto text-center flex justify-center items-center gap-2 mt-5'>
                                        <p> Open Account</p>
                                        <AiOutlineArrowRight size={24}></AiOutlineArrowRight>
                                   </div>


                              </div>
                         </div>
                         <div className='bg-white  shadow p-4 rounded-2xl flex justify-center items-center flex-col'>
                              <div className=' mx-auto bg-[#F5FAFF] p-10 rounded-full'>
                                   <Image className=' max-w-[80px] max-h-[80px] rounded-full' width={100} height={100} src={business} alt='image'></Image>
                              </div>
                              <div className=' text-center'>
                                   <h1 className=' text-xl md:text-2xl font-bold textColor'> Business Account</h1>
                                   <p className=' text-base md:text-lg font-normal my-3'>Take charge of your business banking with a business bank account. Services including virtual cards, team management and more</p>
                                   <div className=' text-base md:text-lg primary  font-bold mx-auto text-center flex justify-center items-center gap-2 mt-5'>
                                        <p> Open Account</p>
                                        <AiOutlineArrowRight size={24}></AiOutlineArrowRight>
                                   </div>


                              </div>
                         </div>

                    </div>
               </Container>

          </div>
     );
};

export default Business;