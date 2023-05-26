// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../Context/Auth_context";

// // const user = JSON.parse(localStorage.getItem("user"));
// const Nav = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <header className="sticky top-0 z-10 flex flex-row w-full items-center justify-between bg-gray-200 p-1 text-sky-800 drop-shadow-lg ">
//       <Link
//         to="/"
//         className="fluid flex w-full items-start flex-col md:flex-row ml-5"
//       >
//         <div className="flex mx-3">
//           <h2 className="text-3xl md:text-5xl font-bold text-blue-500">C</h2>
//           <h2 className="text-3xl md:text-5xl font-bold text-red-500">S</h2>
//           <h2 className="text-3xl md:text-5xl font-bold text-yellow-500">5</h2>
//           <h2 className="text-3xl md:text-5xl font-bold text-green-500">0</h2>
//         </div>
//         <h2 className="text-sm lg:text-3xl font-bold underline">
//           Book Review Blog
//         </h2>
//       </Link>

//         <div className="w-full flex justify-end ">
//           <button
//             data-collapse-toggle="navbar-default"
//             type="button"
//             className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-200"
//             aria-controls="navbar-default"
//             aria-expanded="true"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-12 h-12"
//               aria-hidden="true"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </button>
//           <div
//             className="hidden w-5/6 md:block text-2xl md:w-auto absolute md:static top-20 m-3"
//             id="navbar-default"
//           >
//             <ul className="font-medium md:text-2xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-200">

//               <li>
//                 <Link
//                   to="/reviews"
//                   className="block text-md md:text-2xl py-2 pl-3 pr-4 text-sky-800  rounded hover:bg-cyan-600 hover:text-white"
//                 >
//                   Reviews
//                 </Link>
//               </li>
//               {user && (<li>
//                 <Link
//                   to="/create"
//                   className="block text-md md:text-2xl py-2 pl-3 pr-4 text-sky-800  rounded hover:bg-cyan-600 hover:text-white"
//                 >
//                   Create
//                 </Link>
//               </li>)}
//               <li>
//                 <Link
//                   to="/about"
//                   className="block text-md md:text-2xl py-2 pl-3 pr-4 text-sky-800  rounded hover:bg-cyan-600 hover:text-white"
//                 >
//                   About
//                 </Link>
//               </li>
//               {!user && (<ul className="flex">
//                 <li>
//                 <Link
//                   to="/register"
//                   className="block text-md md:text-2xl py-2 pl-3 pr-4 text-sky-800  rounded hover:bg-cyan-600 hover:text-white"
//                 >
//                   Register
//                 </Link>
//               </li>
//               <li>
//               <Link
//                 to="/login"
//                 className="block text-md md:text-2xl py-2 pl-3 pr-4 text-sky-800  rounded hover:bg-cyan-600 hover:text-white"
//               >
//                 Login
//               </Link>
//             </li>
//               </ul>)}
//             </ul>
//           </div>
//         </div>
//     </header>
//   );
// };

// export default Nav;

import React, { useContext } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Auth_context";

const Nav = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar fluid>
        <Navbar>
          <Link
            to="/"
            className="fluid flex w-full items-start flex-col md:flex-row m-0 p-0 ml-5"
          >
            <div className="flex">
              <h2 className="text-2xl md:text-5xl font-bold text-blue-500">
                C
              </h2>
              <h2 className="text-2xl md:text-5xl font-bold text-red-500">S</h2>
              <h2 className="text-2xl md:text-5xl font-bold text-yellow-500">
                5
              </h2>
              <h2 className="text-2xl md:text-5xl font-bold text-green-500">
                0
              </h2>
            </div>
            <h2 className="text-sm lg:text-3xl font-bold underline text-blue-500 my-auto">
              Book Review Blog
            </h2>
          </Link>
        </Navbar>
        <div className="flex md:order-2">
          <Navbar.Toggle  />
        </div>
        <Navbar.Collapse className="ml-auto">
          <Navbar.Link active={false} href="/reviews" className="text-2xl">
            Reviews
          </Navbar.Link>
          {user && (<Navbar.Link href="/create" className="text-2xl">Create</Navbar.Link>)}
          <Navbar.Link href="/about" className="text-2xl">About</Navbar.Link>

          {!user && (
            <>
              <Navbar.Link href="/register" className="text-2xl">Register</Navbar.Link>
              <Navbar.Link href="/login" className="text-2xl">Login</Navbar.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;
