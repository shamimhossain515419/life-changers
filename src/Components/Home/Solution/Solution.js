import Image from 'next/image';
import React from 'react';
import personalized from '../../../../public/image/personalized.webp'

import Link from 'next/link';
import Container from '@/Components/Contianer/Container';
const Solution = () => {
     return (
          <div className=' bg-[#17234a]'>
               <Container>


                    <div className=' grid md:grid-cols-2 gap-4 items-center py-8 '>
                         <div className=' text-center mx-auto'>
                              <Image className=' text-center mx-auto' src={personalized} alt="image"></Image>
                         </div>

                         <div className=' text-white'>
                              <h1 className={`  text-2xl   md:text-3xl lg:text-6xl  py-4   font-extrabold `}> Need a Personalized Solution?</h1>
                              <p className=' text-base  md:text-lg font-normal mt-5'> Get in touch with us, and we will help you to create the right one for your business or personal needs.</p>
                              <div className=' mt-5'>
                                   <Link href={'register'} className="btn  px-5 py-2 btn-gradient-border btn-glow text-white">Apply for a loan</Link>
                              </div>
                         </div>

                    </div>
               </Container>

          </div>
     );
};

export default Solution;