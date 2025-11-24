import React from "react";
import { FiMenu } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { PiMicrophoneLight } from "react-icons/pi";
import { IoMdMic } from "react-icons/io";
import { RiAddLargeLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex bg-green-300 items-center justify-between gap-2 shrink-0">
      <div className="flex items-center bg-red-300 w-[181px] shrink-0 px-2">
        <div className="w-8 h-8 bg-gray-300 flex justify-center items-center m-3 rounded-full">
          <FiMenu className="text-2xl" />
        </div>

        <img
          src="https://cdn2.steamgriddb.com/logo_thumb/a10bf158bd72fc032e9461982f9d2a38.png"
          className="w-[93px] h-5 ml-2"
        />
      </div>

      <div className="sm:flex hidden items-center w-full justify-center min-w-0">
        <input
          type="type"
          placeholder="Search"
          className="pl-4 pr-1 h-10 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 w-5/12"
        />
        <div className="flex items-center pr-1 text-2xl w-15 justify-center bg-amber-300 rounded-r-full h-10 border-gray-300 border-l-0  hover:bg-gray-200">
          <CiSearch />
        </div>
        <CiSearch className="sm:hidden block" />
        <PiMicrophoneLight className="ml-4 text-2xl" />
      </div>
      <CiSearch className="flex sm:hidden items-center justify-center text-2xl" />
      {/* <div className="flex items-center gap-2">
        <div className="flex gap-2 ">
          <div className="hidden sm:flex items-center">
            <div className="flex">
              <input type="text" className="flex flex-1 border border-gray-300 w-7/12 ml-8 rounded-l-full focus:outline-none focus:border-blue-500 pl-4 pr-1" placeholder="Search"/>
              <div className="flex items-center px-4 bg-amber-500 rounded-r-full text-2xla"><CiSearch /></div>
            </div>
            <CiSearch className="sm:hidden block" />
            <PiMicrophoneLight className="ml-4 text-2xl"/>
          </div>
        </div>
      </div> */}
      <div className="flex items-center gap-2">
        <div className="md:flex items-center gap-2 rounded-full bg-amber-500 md:px-4 md:py-2 px-2 py-1 hidden ">
          
          Create
        </div>
        <div className="flex items-center gap-2 md:gap-5 text-2xl mr-6 p-2">
          <IoNotificationsOutline className="hidden md:block bg-gray-400 w-8 h-8 p-1 rounded-full" />
          <FaCircleUser className="bg-red-400 w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
