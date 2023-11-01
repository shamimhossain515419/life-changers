
import CommonNewCart from '@/Components/CommonNewCart/CommonNewCart';
import Container from '@/Components/Contianer/Container';
import { GetNews } from '@/services/news';

import Link from 'next/link';
import { FiSearch } from 'react-icons/fi'
const News = async() => {
     const news = await GetNews();

     console.log(news);
 
    return (
          <div>
               <div>
                    <div className="  bg-[#F4F4F4] py-4 px-2  ">
                         <div>
                              <Container>
                                   <div className=" flex    items-center gap-1  text-xl  font-semibold">
                                        <Link className=" hover:text-[#27895C] duration-150"  href={'/'}>Home  </Link> <p> {">"} </p> <Link className=" hover:text-[#27895C] duration-150"  href={'/news'}>Latest news  </Link>
                                   </div>
                              </Container>
                         </div>
                    </div>
                    <Container>
                         <div className=" grid md:grid-cols-3 gap-10">
                              <div className=" col-span-2 ">
                                   <h1 className="  text-3xl   f font-medium my-3 "> News</h1>

                                   <div>
                                        {
                                             news?.length > 0 ? <>
                                                  {
                                                       news?.map(item => <CommonNewCart key={item?._id} item={item}></CommonNewCart>)
                                                  }

                                             </> : <></>
                                        }
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
                                             news?.map(item => <div className=" p-3 " key={item?._id}>
                                                  <Link className="  text-lg font-normal    hover:text-[#27895C]"  href={`/news/${item?._id}`}> {item?.name} </Link>
                                                  <hr className=" mt-2" />
                                             </div>)
                                        }
                                   </div>


                              </div>
                         </div>
                    </Container>
               </div>
          </div>
     );
};

export default News;