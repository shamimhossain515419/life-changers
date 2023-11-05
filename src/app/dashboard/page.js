import BankCard from '@/Components/Dashbaord/BankCard/BankCard';
import BalanceCard from '@/Components/Dashbaord/balance/Balance';
import { BsSortUpAlt, BsSortDownAlt } from 'react-icons/bs'

import React from 'react';
import Transaction from '@/Components/Dashbaord/Transction/Transction';
import Filter from '@/Components/Dashbaord/Filter/Filter';

const page = () => {
     return (
          <div>
               <div>

                    <div className='  grid md:grid-cols-4 gap-3  items-center'>
                         <div className=' mt-4'>
                              <BankCard></BankCard>
                         </div>
                         <div className=' mt-4'>
                              <BalanceCard></BalanceCard>
                         </div>

                         <div className=' mt-4 shadow  rounded'>
                              <div className=' p-8  '>
                                   <div className=' rounded-lg py-4 bgColor text-2xl flex justify-center items-center gap-3 flex-col  font-bold text-center '>
                                        <h1 className=' secondary'> Income</h1>

                                        <div className='  p-2 rounded-md shadow bg-white '>
                                             <BsSortDownAlt className=' mx-auto block text-center' size={30}></BsSortDownAlt>
                                        </div>
                                        <h1 className='textColor text-lg md:text-3xl font-bold'> $500002</h1>
                                   </div>
                              </div>
                         </div>
                         <div className=' mt-4 shadow  rounded'>
                              <div className=' p-8   '>
                                   <div className=' bgColor rounded-lg text-2xl  py-4 flex justify-center items-center gap-3 flex-col  font-bold text-center '>
                                        <h1 className=' secondary'> Installment</h1>
                                        <div className='  p-2 rounded-md shadow bg-white'>
                                             <BsSortUpAlt className=' mx-auto block text-center' size={30}></BsSortUpAlt>
                                        </div>
                                        <h1 className='textColor text-lg md:text-3xl font-bold'> $500002</h1>
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>


               <div className=' grid md:grid-cols-7'>

                    <div className=' md:col-span-4 my-5'>
                         <div className=' flex  justify-between items-center gap-2'>
                              <h1 className=' text-lg md:text-2xl font-bold textColor capitalize'>Lest Transaction</h1>
                              <div>
                                   <Filter></Filter>
                              </div>
                         </div>

                         <div className=' w-full '>
                              <div>
                                   <div>
                                        <Transaction></Transaction>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className=' md:col-span-3'>

                    </div>
               </div>


               {/* <RandomNumberGenerator  length={12}></RandomNumberGenerator> */}
          </div>
     );
};

export default page;