import React, { useEffect } from "react";
import MenuBar from "./MenuBar";
import VideoContainer from "./VideoContainer";
import VideoPage from "./VideoPage";
import PlayPage from "./PlayPage";
import { useDispatch } from "react-redux";
import { removeSelectedVideoDetail } from "../Utils/SelectedVideoSlice";

const MainBody = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(removeSelectedVideoDetail());
  // });

  return (
    <div className="flex-1 flex min-h-0">
      <MenuBar />
      <VideoContainer />
      {/* <PlayPage /> */}
    </div>
  );
};

export default MainBody;
