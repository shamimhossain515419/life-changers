// components/Table.js

import Image from 'next/image';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs'
import { FcMoneyTransfer } from 'react-icons/fc'
const Transaction = () => {
     return (
          <div className="container mx-auto p-4 w-full">
               <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">

                         <tbody>

                    
                              <tr>
                                   <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <Image className=' object-fill  rounded' width={50} height={50} src={'https://i.ibb.co/F8nwQmb/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'} alt=''></Image>
                                   </td>
                                   <td className="px-6 py-4 text-base md:text-xl font-medium whitespace-no-wrap border-b border-gray-200">
                                        Jane Smith
                                   </td>

                                   <td className="px-6 py-4 text-base md:text-xl font-medium whitespace-no-wrap border-b border-gray-200">
                                        $8003453454
                                   </td>
                                   <td className="px-6 py-4 text-base md:text-xl font-medium whitespace-no-wrap border-b border-gray-200">
                                        3:45 PM
                                   </td>
                                   <td className="px-6 py-4  whitespace-no-wrap border-b border-gray-200">
                                        <div className=' flex justify-center items-center gap-4'>
                                             <div>
                                                  <FcMoneyTransfer size={24}></FcMoneyTransfer>
                                             </div>

                                             <div className=' cursor-pointer'>
                                                  <BsThreeDots size={24}></BsThreeDots>
                                             </div>
                                        </div>
                                   </td>
                              </tr>
                              <tr>
                                   <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <Image className=' object-fill  rounded' width={50} height={50} src={'https://i.ibb.co/F8nwQmb/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'} alt=''></Image>
                                   </td>
                                   <td className="px-6 py-4 text-base md:text-xl font-medium whitespace-no-wrap border-b border-gray-200">
                                        Jane Smith
                                   </td>

                                   <td className="px-6 py-4 text-base md:text-xl font-medium whitespace-no-wrap border-b border-gray-200">
                                        $800
                                   </td>
                                   <td className="px-6 py-4 text-base md:text-xl font-medium whitespace-no-wrap border-b border-gray-200">
                                        3:45 PM
                                   </td>
                                   <td className="px-6 py-4  whitespace-no-wrap border-b border-gray-200">
                                        <div className=' flex justify-center items-center gap-4'>
                                             <div>
                                                  <FcMoneyTransfer size={24}></FcMoneyTransfer>
                                             </div>

                                             <div className=' cursor-pointer'>
                                                  <BsThreeDots size={24}></BsThreeDots>
                                             </div>
                                        </div>
                                   </td>
                              </tr>
                             

                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default Transaction;
