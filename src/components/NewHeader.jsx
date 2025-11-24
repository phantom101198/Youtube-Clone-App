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
  /**
   *
   * sec1
   * -menu + yt logo
   * sec2
   * -search bar
   * sec3
   */

  return (
    <div className="flex flex-1 justify-between items-center gap-2 px-4 h-14 shadow-md w-full">
      {/* section-1 logo n menu */}
      <div className="flex justify-center items-center">
        <div className="p-2 text-2xl h-10 w-10 hover:bg-gray-200 rounded-full">
          <RxHamburgerMenu />
        </div>
        <div className="flex gap-1 w-[123px] h-14 py-[18px] pr-4 pl-3.5 mt-0.5">
          <img
            src="https://cdn2.steamgriddb.com/logo_thumb/a10bf158bd72fc032e9461982f9d2a38.png"
            alt="youtube-logo"
            className="w-[93px] h-5"
          />
          <sup className="text-xs">IN</sup>
        </div>
      </div>

      {/* section-2 Search */}
      <div className="flex justify-end sm:justify-center items-center w-[732px] h-10">
        {/* <div className="hidden sm:flex md:w-[80%] lg:w-[50%]"> */}
        <div className="hidden sm:flex w-full">
          <input
            type="text"
            placeholder="Search"
            className="flex flex-1 border border-gray-300 w-7/12 ml-8 rounded-l-full focus:outline-none focus:border-blue-500 pl-4 pr-1"
          />
          <button className="text-2xl flex items-center justify-center w-16 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200 cursor-pointer">
            <CiSearch />
          </button>
          <div className="text-2xl flex items-center justify-center ml-3 w-10 h-10 hover:bg-gray-200 rounded-full cursor-pointer">
            <IoMdMic />
          </div>
        </div>
      </div>
      {/* section-3 options */}
      <div className="flex gap-2 items-center w-[225px] h-10 justify-end">
        <div className="hidden bg-gray-100 hover:bg-gray-200 sm:flex justify-between items-center px-4 py-1.5 rounded-full mr-2 cursor-pointer">
          <div className="flex items-center h-6 w-6"><RiAddLargeLine /></div>
          <p className="font-semibold">Create</p>
        </div>
        <div className="text-2xl hover:bg-gray-200 rounded-full p-2 cursor-pointer">
          <IoNotificationsOutline />
        </div>
        <div className="text-3xl cursor-pointer">
          <FaCircleUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
