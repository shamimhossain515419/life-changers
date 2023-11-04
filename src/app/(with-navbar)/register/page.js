'use client'
import Container from '@/Components/Contianer/Container';
import Input from '@/Components/Input/Input';
import Notification from '@/Components/Notification/Notification';
import TitleBar from '@/Components/TitleBar/TitleBar';
import { AuthContext } from '@/GlobaState';
import { PostUser } from '@/services/users';
import { register } from '@/utils';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
const init = {
     name: "",
     email: "",
     password: "",
     invited: "",
}
const page = () => {

     const { createUser, profileUpdate } = useContext(AuthContext)

     const [FromData, setFromData] = useState(init);
     const userData = { name: FromData?.name, email: FromData?.email, image: '', phone: 0, address: '', loan: 0, deposit: 0, instalment: 0, profit: 0 }

     console.log(FromData);
     const handleSubmit = async () => {
          const User = await PostUser(FromData);
          const result = await createUser(FromData?.email, FromData?.password)
          const data = await profileUpdate(FromData?.name, "")
          console.log(User);
          if (User) {
               toast.success(`${User?.message ? User?.message:result?.massage}`)
          }
     }

     return (
          <div className=' pt-[110px] '>
               <div className=' my-4'>

                    <div>
                         <Container>
                              <div className=' md:px-[300px] w-full mx-auto'>
                                   <TitleBar title={"Let’s Get Started!"} subtitle={"The Power of Financial Freedom"} paragraph={"Please Enter your Email Address to Start your Online Application"}></TitleBar>

                                   <div>

                                        <div>
                                             {
                                                  register?.map(item => <Input key={item?.id}

                                                       onChange={(event) => {
                                                            setFromData({
                                                                 ...FromData,
                                                                 [item.id]: event.target.value,
                                                            });
                                                       }}

                                                       type={item?.type} placeholder={item?.placeholder} title={item?.title} ></Input>)
                                             }


                                        </div>
                                   </div>
                                   <div>
                                        <button onClick={handleSubmit} className="btn  px-5 btn-gradient-border btn-glow text-white">Submit new</button>
                                   </div>

                                   <div className=' flex justify-start mt-4  gap-5 text-xl  items-center'>
                                        Already have an account?  <Link href={'/login'} className=' primary'> Login now  </Link>
                                   </div>

                              </div>
                         </Container>
                    </div>
               </div>

               <Notification></Notification>
          </div>
     );
};

export default page;