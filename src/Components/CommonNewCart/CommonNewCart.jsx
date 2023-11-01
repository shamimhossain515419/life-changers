

import { AiTwotoneCalendar } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import moment from "moment/moment";
import Image from "next/image";
import Link from 'next/link';
const CommonNewCart = ({ item }) => {

     return (

          <div>
               <div className=" grid md:grid-cols-2 gap-4 my-6">
                    <div className=" w-full   h-[200px] md:h-[300px]  ">
                         <Image width={100} height={100} className="  h-full object-fill w-full" src={item?.image[0] ? item?.image[0]:item?.image[1]} alt="" />
                    </div>
                    <div>
                         <Link className=" text-xl md:text-2xl font-medium hover:text-[#27895C] duration-150" href={`/news/${item?._id}`}> {item?.name} </Link>
                         <div className=" my-2 md:my-4 flex justify-between gap-2 items-center">
                              <div className=" flex items-center textColor text-sm font-medium  gap-2">
                                   <AiTwotoneCalendar size={20}></AiTwotoneCalendar>
                                   <p> {moment(item?.date).format("MMM Do YY")} </p>
                              </div>
                              <div className=" flex items-center textColor text-sm font-medium  gap-2">
                                   <FaRegCommentDots size={20}></FaRegCommentDots>
                                   <p> leave a comment </p>
                              </div>

                         </div>
                         <div>
                              <p className=" text-base font-medium">   {item?.description.slice(0, 180)}...</p>
                         </div>
                         <div className=" y-2 md:pt-4 ">
                              <Link href={`/news/${item?._id}`} className=" text-xl font-medium textColor "> READ MORE... </Link>
                         </div>
                    </div>
               </div>
               <hr className=" my-2" />
          </div>
     );
};

export default CommonNewCart;