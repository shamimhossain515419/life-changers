import Container from '@/Components/Contianer/Container';
import Image from 'next/image';
import React from 'react';

import Start from '../../../../public/image/get-start.webp'
const Get_start = () => {
     return (
          <div className='  px-16 '>
               <Container>
                    <div className=' bg-[#1A4DBE] md:p-4 rounded-2xl'>
                         <div className='   flex text-white justify-between  items-center gap-2'>

                              <div className=' p-3 md:ml-20'>
                                   <h1 className='text-xl  md:text-3xl font-bold  '> Ready to get started?</h1>
                                   <p className=' text-xl my-3 font-semibold '> It only takes a few minutes to register your FREE Bankio account.</p>

                                   <div  className=' mt-3'>
                                        <button className="btn  px-5 btn-gradient-border btn-glow text-white">Open an Account</button>
                                   </div>
                              </div>
                              <div>
                                   <Image className='  h-[350px] p-20' src={Start} alt='image'></Image>
                              </div>
                         </div>
                    </div>
               </Container>

          </div>
     );
};

export default Get_start;