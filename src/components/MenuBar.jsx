import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const MenuBar = () => {
  return (
    <div className="hidden w-[72px] min-[792px]:flex justify-center px-1">
      <div className="flex flex-col items-center mt-1 w-full">
        <div className="flex flex-col items-center mt-1 w-full pt-4 pb-3.5 hover:bg-gray-200 rounded-2xl ">
          <div className="w-6 h-6 text-[24px]">
            <IoMdHome />
          </div>
          <div className="h-6 text-[10px] pt-2.5">
            <p>Home</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-1 w-full pt-4 pb-3.5 hover:bg-gray-200 rounded-2xl ">
          <div className="w-6 h-6 text-[24px]">
            <SiYoutubeshorts />
          </div>
          <div className="h-6 text-[10px] pt-2.5">
            <p>Shorts</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-1 w-full pt-4 pb-3.5 hover:bg-gray-200 rounded-2xl ">
          <div className="w-6 h-6 text-[24px]">
            <MdSubscriptions />
          </div>
          <div className="h-6 text-[10px] pt-2.5">
            <p>Subscriptions</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-1 w-full pt-4 pb-3.5 hover:bg-gray-200 rounded-2xl ">
          <div className="w-6 h-6 text-[24px]">
            <FaCircleUser />
          </div>
          <div className="h-6 text-[10px] pt-2.5">
            <p>You</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
