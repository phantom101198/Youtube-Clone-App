import React from "react";
import MenuBar from "./MenuBar";
import VideoContainer from "./VideoContainer";
import VideoPage from "./VideoPage";
import PlayPage from "./PlayPage";

const MainBody = () => {
  return (
    <div className="flex-1 flex min-h-0">
      <MenuBar />
      <VideoContainer />
      {/* <PlayPage /> */}
    </div>
  );
};

export default MainBody;
