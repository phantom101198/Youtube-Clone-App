import React from "react";
import CategoryBar from "./CategoryBar";
import VideoSection from "./VideoSection";

const VideoContainer = () => {
  return (
    <div className="bg-pink-300 flex flex-col flex-1 min-w-0 min-h-0 overflow-x-hidden">
      <CategoryBar />
      <VideoSection />
    </div>
  );
};

export default VideoContainer;
