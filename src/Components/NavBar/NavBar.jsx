"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";




import NavLink from "../NavLink/NavLink";
import { AuthContext } from "@/GlobaState";
import Modal from "../Home/Modal/Modal";




const NavLinks = [
  {
    label: "Home",
    path: "/",
    // icon: <GiFamilyHouse fontSize={20} />,
  },
  {
    label: "About",
    path: "/about",
    // icon: <SlInfo fontSize={20} />,
  },
  {
    label: "Contact",
    path: "/contact",
    // icon: <SlInfo fontSize={20} />,
  },
  {
    label: "News",
    path: "/news",
    // icon: <FaUserDoctor fontSize={20} ></FaUserDoctor>
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    // icon: <RxDashboard fontSize={20} />,
  },
];

const Navbar = () => {
  // const { user, logout } = useAuth();
  const { user, logout, openModal, setOpenModal } = useContext(AuthContext)
  const [open, setOpen] = useState(false);
  console.log(user?.user);
  const handleLogOut = () => {
    logout()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      className={` px-10 md:py-5 py-2 fixed z-50 top-0 left-0 w-full bg-black/20 text-white duration-400`}
      id="nav-bg"
    >
      <nav className="flex justify-between items-center">
        <div className="">
          <h1 className=" text-xl secondary  md:text-4xl font-bold flex items-center">
            <Link href="/">Life  Changers</Link>
          </h1>
        </div>
        <ul
          className={` md:static absolute md:bg-transparent  hover:secondaryBg  md:p-0 p-10 md:w-auto text-center w-full   md:flex nav-box duration-300 ${open ? "left-0 top-0 " : "left-[-500rem] top-0"
            } `}
        >
          {NavLinks.map(({ label, path }) => {
            return (
              <li
                key={path}
                className="mr-4 md:hover:text-[#23A455] hover:text-black navBar-list md:mt-0 mt-10"
              >
                <NavLink
                  // className={` ${
                  //   currentPath === path ? " text-[#0b9795] font-bold" : ""
                  // }`}
                  // activeClassName="text-blue-500"
                  href={path}
                // className="text-xl "
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="font-bold z-20 duration-200 menu-bars p-6 md:hidden inline-block">
          {open ? (
            <AiOutlineClose
              onClick={() => setOpen(!open)}
              className="font-bold text-3xl"
            ></AiOutlineClose>
          ) : (
            <AiOutlineMenuUnfold
              onClick={() => setOpen(!open)}
              className="font-bold text-3xl"
            ></AiOutlineMenuUnfold>
          )}
        </div>
        <div className="  hidden md:block">
          {user ? (
            <>
              <div onClick={() => setOpenModal(!openModal)} className=" px-3 py-[7px] rounded-2xl border border-[#1a4bde] cursor-pointer  hover:bg-[#1a4bde] hover:text-white   dropdown-end">
                <h1 className=" text-xl  font-medium "> {user?.email.slice(0, 10)} </h1>

              </div>
            </>
          ) : (
            <Link href="/register" className=" text-white  primaryBg px-3 py-2">
              <button>Open Account</button>
            </Link>
          )}
        </div>
      </nav>

      <div>
        {
          openModal ? <>  <Modal openModal={openModal} setOpenModal={setOpenModal} handleLogOut={handleLogOut} user={user}></Modal></> : <></>
        }
      </div>


    </div>
  );
};

export default Navbar;
