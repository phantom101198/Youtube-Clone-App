import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { API_KEY, YOUTUBE_API } from "../Utils/Constants";

const VideoSection = () => {

  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API + API_KEY);
    const json = await data.json();
    console.log(json.items);
    setVideoList(json.items);
  };


  if (videoList.length === 0) return <div className="bg-pink-300">Shimmer</div>

  return (
    <div className="pt-6 px-1 md:px-2 pl-3.5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-1 bg-purple-400 self-center">
      {videoList.map((item) => <VideoCard info={item} key={item.id}/>)}

      {/* <VideoCard info={videoList[1]}/>
      <VideoCard info={videoList[1]}/>
      <VideoCard info={videoList[1]}/>
      <VideoCard info={videoList[1]}/>
      <VideoCard info={videoList[1]}/> */}
      
    </div>
  );
};

export default VideoSection;
