import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { API_KEY, YOUTUBE_API } from "../Utils/Constants";
import { Link } from "react-router-dom";

const VideoSection = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API + API_KEY);
    const json = await data.json();
    // console.log(json.items);
    setVideoList(json.items);
    // console.log(videoList);
  };

  if (videoList.length === 0) return <div className="bg-pink-300">Shimmer</div>;

  return (
    <div className="pt-6 px-1 md:px-2 pl-3.5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(450  px,1fr))] flex-1 bg-blue-400 w-full self-center">
      {videoList.map((item) => (
        <Link to={"/watch?v=" + item.id} className="flex w-full" key={item.id}>
          <VideoCard info={item} key={item.id} />
        </Link>
      ))}

      {/* <VideoCard info={videoList[1]}/>
      <VideoCard info={videoList[1]}/>
      <VideoCard info={videoList[1]}/>
      <VideoCard info={videoList[1]}/>
      <VideoCard info={videoList[1]}/> */}
    </div>
  );
};

export default VideoSection;
