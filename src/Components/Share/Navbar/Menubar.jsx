import Image from "next/image";
import Link from "next/link";

const Menubar = () => {
     return (
          <div>
               <div>
                    <hr />
                    <div className=' space-y-3 flex   flex-col '>
                         <Link  href={'/'}> Home</Link>
                         <Link  href={'/alljewelry'}> All jewelry</Link>
                         <Link  href={'/myjewelry'}>My Jewelry</Link>
                         <Link  href={'/addjewelry'}> Add jewelry</Link>
                         <Link  href={'/blogs'}> Blogs</Link>
                         <Link  href={'/contact'}> Contact Us</Link>



                         <div className="  flex items-center gap-1">
                              <Image width={10} height={10} className=" h-12 w-12 rounded-full object-cover" src={""} alt="" />
                              <p> {"shamim hossain"} </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Menubar;