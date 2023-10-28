import { Link } from "react-router-dom";


const Menubar = () => {
     return (
          <div>
               <div>
                    <hr />
                    <div className=' space-y-3 flex   flex-col '>
                         <Link to={'/'}> Home</Link>
                         <Link to={'/alljewelry'}> All jewelry</Link>
                         <Link to={'/myjewelry'}>My Jewelry</Link>
                         <Link to={'/addjewelry'}> Add jewelry</Link>
                         <Link to={'/blogs'}> Blogs</Link>
                         <Link to={'/contact'}> Contact Us</Link>



                         <div className="  flex items-center gap-1">
                              <image className=" h-12 w-12 rounded-full object-cover" src={""} alt="" />
                              <p> {"shamim hossain"} </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Menubar;