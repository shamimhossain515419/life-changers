"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";



import Image from "next/image";
import NavLink from "../NavLink/NavLink";


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
const user =null
   const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    // logout()
    //   .then(() => { })
    //   .catch((error) => console.log(error));
  };
  return (
    <div
      className={` px-10 md:py-5 py-2 fixed z-50 top-0 left-0 w-full bg-black/20 text-white duration-400`}
      id="nav-bg"
    >
      <nav className="flex justify-between items-center">
        <div className="">
          <h1 className=" text-xl  md:text-4xl font-bold flex items-center">
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
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image width={100}  height={100} src={user?.photoURL} alt="image" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <button onClick={handleLogOut}>
                  <li className="text-black">
                    <a>Logout</a>
                  </li>
                </button>
              </ul>
            </div>
          </>
        ) : (
          <Link href="/login" className=" text-white  primaryBg px-3 py-2">
            <button>Open Account</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
