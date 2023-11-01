"use client"
import Container from '@/Components/Contianer/Container';
import { GetNews, Get_single_id } from '@/services/news';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { AiTwotoneCalendar } from "react-icons/ai";
import moment from "moment";
import { FaRegCommentDots } from "react-icons/fa";
import Image from 'next/image';

const SinglePage = () => {
     const params = useParams();
     const id = params?.id;
     const [singleNews, setSingleNews] = useState({})
     const [news, setNews] = useState([])
     const getData = async () => {
          const data = await Get_single_id(id);
          console.log(data);
          setSingleNews(data);
          const news = await GetNews();
           setNews(news)

     }

     useEffect(() => {
          getData(id)
     }, [id])

     console.log(singleNews?.image);
     console.log(singleNews?.image?.[0]);
     return (
          <div>
               <div>
                    <div>
                         <div className="  bg-[#F4F4F4] py-4 px-2  ">
                              <div>
                                   <Container>
                                        <div className=" flex    items-center gap-1  text-xl  font-semibold">
                                             <Link className=" hover:text-[#27895C] duration-150" href={'/'}>Home  </Link> <p> {">"} </p> <Link className=" hover:text-[#27895C] duration-150" href={'/news'}>Latest news  </Link> <p> {">"} </p> <Link className=" hover:text-[#27895C] duration-150" href={'/news'}> {singleNews?.name}  </Link>
                                        </div>
                                   </Container>
                              </div>
                         </div>
                         <Container>
                              <div className=" grid md:grid-cols-3 gap-10">
                                   <div className=" col-span-2 py-3 ">
                                        <h1 className="  text-[#000000b0] text-xl   font-medium my-3 "> {singleNews?.name} </h1>
                                        <div className=" py-3 flex items-center textColor text-sm font-medium  gap-2">
                                             <AiTwotoneCalendar size={20}></AiTwotoneCalendar>
                                             <p> {moment(singleNews?.date).format("MMM Do YY")} </p>
                                        </div>
                                        <div>
                                             <div className=" w-full  h-[300px] md:h-[500px]">
                                                  <Image width={200} height={300} className=" w-full h-full object-fill" src={singleNews?.image?.[0]} alt="image" />
                                             </div>

                                             <div className=" grid grid-cols-2 mt-2  md:grid-cols-3 gap-2">
                                                  <Image width={200} height={300} className=" w-full h-full object-fill" src={singleNews?.image?.[1]} alt="image" />
                                                  <Image width={200} height={300} className=" w-full h-full object-fill" src={singleNews?.image?.[2]} alt="image" />
                                                  <Image width={200} height={300} className=" w-full h-full object-fill" src={singleNews?.image?.[3]} alt="image" />
                                             </div>

                                             <div className=" mt-3">
                                                  <h1 className=" text-[#000000b0] text-lg  font-medium p-2 "> {singleNews?.description} </h1>
                                                  <h1 className=" text-[#000000b0] mt-8 text-lg font-medium"> {singleNews?.title} </h1>
                                             </div>
                                        </div>
                                        <div>
                                             <div className=" pt-8 flex  cursor-pointer items-center textColor text-xl font-medium  gap-2">
                                                  <FaRegCommentDots size={28}></FaRegCommentDots>
                                                  <p className=" cursor-pointer"> leave a comment </p>
                                             </div>

                                             <div>
                                                  {
                                                       singleNews?.comment?.map(item => <div className=" my-5" key={item?.email}>
                                                            <div className=" flex text-[#000000b0]  gap-1 items-center">
                                                                 <Image width={200} height={300} className="  w-10 h-10 rounded-full object-fill " src={item?.image} alt="" />
                                                                 <h1 className=" text-xl font-normal"> {item?.name} </h1>
                                                            </div>
                                                            <div className="  text-[#000000b0] p-3 ">
                                                                 <h1 > {item?.comment} </h1>
                                                            </div>
                                                            <hr />
                                                       </div>)
                                                  }
                                             </div>
                                        </div>



                                   </div>
                                   <div className=" col-span-1  pt-9">

                                        <div>
                                             <div>
                                                  <h1 className=" thirdBg text-xl  md:text-2xl font-medium  text-[#000000b0]  px-4 py-3 rounded-sm  uppercase   "> Search</h1>

                                                  <div className=" thirdBg text-xl flex justify-between items-center gap-1 mt-[1px]  md:text-2xl font-medium  text-[#000000b0]  px-4 py-3 rounded-sm  uppercase   ">
                                                       <input className=" w-full text-base font-normal p-2  capitalize
                                           text-[#4a4646b0]" type="text" placeholder=" Search..." name="" id="" />
                                                       <FiSearch className=" mx-3 cursor-pointer " size={20}></FiSearch>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className=" mt-6">
                                             <h1 className=" thirdBg text-xl  md:text-2xl font-medium  text-[#000000b0]  px-4 py-3 rounded-sm  uppercase   "> latest news</h1>
                                        </div>
                                        <div className=" thirdBg text-[#000000b0]  p-2  ">
                                             {
                                                  news?.slice(0, 7).map(item => <div className=" p-3 " key={item?._id}>
                                                       <Link className="  text-lg font-normal    hover:text-[#27895C]" href={`/news/${item?._id}`}> {item?.name} </Link>
                                                       <hr className=" mt-2" />
                                                  </div>)
                                             }
                                        </div>


                                   </div>
                              </div>
                         </Container>
                    </div>
               </div>
          </div>
     );
};

export default SinglePage;