import { SiYoutubeshorts } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { VscHome } from "react-icons/vsc";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center w-20 px-1 bg-green-300">
      <div className="flex flex-col items-center w-16 h-[74px] pt-4 pb-3.5 bg-yellow-200">
        <div className="w-6 h-6 text-[26px] mb-1.5">
          <IoMdHome />
        </div>
        <p className="h-6 text-[10px]">Home</p>
      </div>
      <div className="flex flex-col items-center w-16 h-[74px] pt-4 pb-3.5">
        <div className="w-6 h-6 text-[26px] mb-1.5">
          <SiYoutubeshorts />
        </div>
        <p className="h-6 text-[10px]">Shorts</p>
      </div>
      <div className="flex flex-col items-center w-16 h-[74px] pt-4 pb-3.5">
        <div className="w-6 h-6 text-[26px] mb-1.5">
          <MdSubscriptions />
        </div>
        <p className="h-6 text-[10px]">Subscriptions</p>
      </div>
      <div className="flex flex-col items-center w-16 h-[74px] pt-4 pb-3.5">
        <div className="w-6 h-6 text-[26px] mb-1.5">
          <FaCircleUser />
        </div>
        <p className="h-6 text-[10px]">You</p>
      </div>
    </div>
  );
};

export default SideBar;
