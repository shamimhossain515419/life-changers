

import Image from 'next/image';
import image1 from '../../../public/image/img-1.jpg'
import image2 from '../../../public/image/img-2.jpg'
import shape from '../../../public/image/shape-1.png'
import CommonTitle from "../CommonTitle/CommonTitle";
import Container from '../Contianer/Container';
import Link from 'next/link';
const About = () => {
     return (
          <div>
               <Container>


                    <div className=' grid md:grid-cols-2 gap-3'>
                         <div className=' relative'>
                              <div className=' relative  rounded  overflow-hidden'>
                                   <div className='  rounded  overflow-hidden   w-[80%]  p-4'>
                                        <Image className=' relative overflow-hidden p-8 z-30 left-10  w-full     object-fill ' width={200} height={200} src={image1} alt='image'></Image>
                                   </div>

                                   <Image className='  absolute   bottom-0  w-[40%]  object-left ' src={shape} width={200} height={200} alt='image'></Image>
                              </div>
                              <div className=' absolute bottom-2   right-1  w-[40%]   z-40 '>
                                   <Image className=' w-full object-fill   p-2 rounded-3xl' width={200} height={200} src={image2} alt='image'></Image>
                              </div>



                         </div>

                         <div className='  p-4  md:p-10'>
                              <CommonTitle paragraph={"Solutions that make a difference"} title={"ABOUT US"}></CommonTitle>

                              <div className=' mt-7'>
                                   <p className=' text-[18px]  font-medium my-2'> Welcome to Life Changers, where we believe in the power of financial empowerment to transform lives. We understand that achieving your dreams, securing your future, and making a difference all require the right resources and support. That's where we come in.</p>
                                   <p className=' text-[18px]  font-medium mt-10'> At Life Changers, we're not just a bank; we're your financial catalyst, here to help you on your journey to financial success and life-changing moments. Our mission is simple: to provide you with the tools, resources, and expertise you need to take control of your financial destiny.</p>
                              </div>

                              <button className="btn  px-5 btn-gradient-border btn-glow text-white">About us</button>
                         </div>
                    </div>

               </Container>
          </div>
     );
};

export default About;