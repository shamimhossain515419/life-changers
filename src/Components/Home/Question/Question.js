import React, { useState } from 'react';
import Container from '../../Contianer/Container';
import TitleBar from '../../TitleBar/TitleBar';
import { Questions } from '../../utils/sliderData/Question';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = () => {

     const [Open, setOpen] = useState(1);

     return (
          <div className=' py-8'>
               <Container>

                    <div>
                         <TitleBar aline={"text-center"} subtitle={"If you have question,we have answer"} paragraph={"Get answers to all questions you have and boost your knowledge so you can save, invest and spend smarter. "} title={" Frequently asked questions"}></TitleBar>
                    </div>

                    <div className=' mt-16'>



                         <div className='max-w-[800px]  mx-auto flex justify-center items-center gap-2 w-full'>
                              <div className=' w-full'>

                                   {
                                        Questions?.map(item => <div className='   my-4 shadow w-full  p p-4 rounded'>
                                             <div onClick={() => setOpen(item._id)} className='flex cursor-pointer   justify-between items-center gap-1 w-full'>
                                                  <h1 className=' textColor text-lg md:text-xl font-bold'> {item?.title} </h1>

                                                  <div>
                                                       {
                                                            Open == item?._id ? <div className='p-2 bg-[#416aff] text-white rounded '>
                                                                 <AiOutlineMinus size={24}></AiOutlineMinus>
                                                            </div> : <div className='p-2 bg-[#857c7c43] primary rounded '>
                                                                 <AiOutlinePlus size={24}></AiOutlinePlus>
                                                            </div>
                                                       }
                                                  </div>

                                             </div>
                                             <div className=' transform translate-x-3 duration-300 '>
                                                  {Open == item?._id ? <div className='  mt-4'>
                                                       <div className=' h-[1px]  primaryBg w-full' />
                                                       <div className=' my-3 '>
                                                            <p className=' text-base md:text-lg my-2  font-medium'> {item?.description} </p>
                                                       </div>
                                                  </div> : null
                                                  }

                                             </div>
                                        </div>)
                                   }
                              </div>
                         </div>

                    </div>


               </Container>
          </div>
     );
};

export default Question;