'use client'

import Container from '@/Components/Contianer/Container';
import Input from '@/Components/Input/Input';
import Notification from '@/Components/Notification/Notification';
import TitleBar from '@/Components/TitleBar/TitleBar';
import { AuthContext } from '@/GlobaState';
import { loginFormControls } from '@/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
const init =
{
     email: "",
     password: ""
}

const page = () => {
     const { signIn } = useContext(AuthContext)
     const [FromData, setFromData] = useState(init);
     const Router = useRouter();
     const handleLogin = async () => {
          const result = await signIn(FromData?.email, FromData?.password)
          if (result?.user) {
               toast.success("Successfully Login")
               Router.push('/')
          } else {
               toast.error(result?.massage)
          }

     }


     return (
          <div>
               <div className=' pt-[110px] '>
                    <div className=' my-4'>

                         <div>
                              <Container>
                                   <div className=' md:px-[300px] w-full mx-auto'>
                                        <TitleBar title={"Set Up Your Password"} subtitle={"The Power of Financial Freedom"} paragraph={"Your security is our top priority. You'll need this to log into your bankio account"}></TitleBar>

                                        <div>

                                             <div>
                                                  {
                                                       loginFormControls?.map(item => <Input key={item?.id}

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
                                             <button onClick={handleLogin} className="btn  px-5 btn-gradient-border btn-glow text-white">Login new</button>
                                        </div>

                                        <div className=' flex justify-start mt-4  gap-5 text-xl  items-center'>
                                             Don’t have an account?  <Link href={'/register'} className=' primary'>Create a free account  </Link>
                                        </div>

                                   </div>
                              </Container>
                         </div>
                    </div>
               </div>
               <Notification></Notification>

          </div>
     );
};

export default page;