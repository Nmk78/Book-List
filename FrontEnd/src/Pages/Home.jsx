import React from "react";
import hero_min from "../assets/hero_min.gif";
import { Link } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";

const Home = () => {
  const {logout} = useLogout()
  const logOutHandler = () => {
    logout()
  }
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="container h-full mx-auto flex flex-col justify-center items-center">
      <p className="text-blue-700 text-lg font-bold text-center">{user? `Hello ${user?.email?.split("@")[0]}`:" Happy Reading!"} </p>
      <img src={hero_min} alt="hero gif" className="mx-auto" />
      <div className="text-3xl font-bold font-italic text-center m-2 text-orange-500 mt-10">
        <ul className="flex">
          {
            !user && (<li>
              <button>
                <Link
                  to="/register"
                  className="block text-base md:text-2xl py-1 pl-1.5 pr-2 md:py-2 md:pl-3 md:pr-4  hover:rounded-full rounded bg-cyan-600 text-white mx-5 lg:mx-20"
                >
                  Register
                </Link>
              </button>
            </li>)
          }
          <li>
            {!user ? (
              <button>
                <Link
                  to="/login"
                  className="block text-base md:text-2xl py-1 pl-1.5 pr-2 md:py-2 md:pl-3 md:pr-4  hover:rounded-full rounded bg-cyan-600 text-white mx-5 lg:mx-20"
                >
                  Login
                </Link>
              </button>
            ) : (
              <button onClick={logOutHandler}>
                <Link
                  to="/"
                  className="block text-base md:text-2xl py-1 pl-1.5 pr-2 md:py-2 md:pl-3 md:pr-4  hover:rounded-full rounded bg-cyan-600 text-white mx-5 lg:mx-20"
                >
                  Logout
                </Link>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
