import React from "react";
import { FiMenu } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import {
  PiMicrophone,
  PiMicrophoneBold,
  PiMicrophoneLight,
} from "react-icons/pi";
import { IoMdMic } from "react-icons/io";
import { RiAddLargeLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const UpHeader = () => {
  return (
    <header className="flex justify-between items-center px-2 sm:px-4 bg-green-300">
      {/* left */}
      <div className="flex items-center">
        <div className="p-2 hover:bg-gray-200 rounded-full">
          <FiMenu className="text-2xl" />
        </div>

        <div className=" py-4.5 pl-4 pr-3.5 flex-none">
          <img
            src="https://cdn2.steamgriddb.com/logo_thumb/a10bf158bd72fc032e9461982f9d2a38.png"
            className="w-[93px] h-5"
          />
        </div>
      </div>

      {/* mid */}
      <div className="flex-1 min-w-0 sm:flex justify-center px-2 hidden">
        <div className="w-full max-w-[536px] min-w-0 flex items-center justify-center ml-8 pl-4 pr-1 border border-gray-300 focus:border-blue-500 rounded-l-full border-r-0 py-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full focus:outline-none text-lg"
          />
        </div>
        <div className="w-full max-w-16 flex items-center justify-center pl-2 pr-1 border border-gray-300 rounded-r-full py-1 hover:bg-gray-100">
          <button className="text-2xl ">
            <FiSearch />
          </button>
        </div>
        <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 ml-3">
          <PiMicrophone className="text-2xl" />
        </div>
      </div>

      {/* right */}
      <div className="flex">
        <div className="flex">
          <div className="sm:hidden flex p-2 rounded-full hover:bg-gray-200">
            <FiSearch className="text-2xl" />
          </div>
          <div className="hidden min-[429px]:flex sm:hidden p-2 rounded-full hover:bg-gray-200">
            <PiMicrophone className="text-2xl" />
          </div>
        </div>
        <div className="rounded-full flex items-center mr-2 px-4 py-1.5 bg-gray-100 hover:bg-gray-200">
          <div className="text-2xl mr-1.5 -ml-1.5">
            <RiAddLargeLine />
          </div>
          <span className="text-sm font-semibold">Create</span>
        </div>
        <div className="hidden min-[429px]:flex p-2 rounded-full hover:bg-gray-200 mr-2">
          <IoNotificationsOutline className="text-2xl" />
        </div>
        <div className="flex items-center justify-center pr-1.5">
          <div className="mx-2">
            <FaCircleUser className="text-4xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default UpHeader;
