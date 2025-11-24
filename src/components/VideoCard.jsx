import { RxDotFilled } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useState } from "react";
import { API_KEY } from "../Utils/Constants";

const VideoCard = ({ info }) => {
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    getAvatar();
  }, []);

  const getAvatar = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=" +
        channelId +
        "&key=" +
        API_KEY
    );

    const json = await data.json();
    setAvatar(json);
  };

    function parseISODuration(isoDuration) {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  const hours = parseInt(match[1] || 0, 10);
  const minutes = parseInt(match[2] || 0, 10);
  const seconds = parseInt(match[3] || 0, 10);

  return { hours, minutes, seconds };
}

function formatDurationSmart(duration) {
  const h = duration.hours;
  const m = String(duration.minutes).padStart(2, '0');
  const s = String(duration.seconds).padStart(2, '0');

  // If hours is zero → skip it
  if (h === 0) {
    return `${m}:${s}`;
  }

  // Otherwise show full h:mm:ss
  return `${h}:${m}:${s}`;
}


const { snippet, contentDetails } = info;
const { channelTitle, thumbnails, title, channelId } = snippet;


const input = contentDetails.duration;
const duration = parseISODuration(input);
const formatted = formatDurationSmart(duration);

console.log(formatted); // "00:03:18"

  const newTitle = title.slice(0, 105);
  if (avatar.length === 0) {
    return <div className="bg-purple-300 max-w-116 mx-2 flex flex-col mb-8 p-2">Loading</div>;
  }

  return (
    <div className="bg-yellow-400 max-w-116 mx-2 flex flex-col mb-8 p-2 hover:bg-gray-400 rounded-xl transition-all group">
      <div className="pb-3 relative">
        <img src={thumbnails.high.url} alt="vCard" className="rounded-2xl group-hover:rounded-none transition-all"/>
        <span className="bg-black/70 text-white absolute bottom-14 font-semibold px-2 py-0.5 rounded-lg right-2">{formatted}</span>
      </div>
      <div className="flex justify-between px-2">
        <div className="mr-3">
          <img
            src={avatar.items[0].snippet.thumbnails.high.url}
            className="m-0.5 w-9 h-9 rounded-full object-cover"
            alt="avatar"
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="font-medium text-base bg-yellow-200 pr-6">
            {title.length <= 80 ? newTitle : newTitle + "..."}
          </div>
          <div className="bg-red-300 text-sm leading-5 mt-0.5 text-[#606060]">
            {channelTitle}
          </div>
          <div className="bg-sky-300 text-sm leading-5 mt-0.5 flex gap-0.5 text-[#606060]">
            <p>7.8M views</p>
            <p className="mx-1">•</p>
            <p>5 years ago</p>
          </div>
        </div>
        {/* <div>avtar</div> */}
      </div>
      <div></div>

      {/* <div className="p-2 max-w-96 grow bg-amber-300">
        <div className="">
          <img
            src={thumbnails.high.url}
            alt=""
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-base text-gray-500">{channelTitle}</p>
          <div className="text-gray-500 flex">
            <span>123 lakh views</span>
            <RxDotFilled /> <span>2 years ago</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default VideoCard;
