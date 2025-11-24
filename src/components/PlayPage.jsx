import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

const PlayPage = () => {

  useEffect(() => {
    if(info.selectedVideoData === null ) navigate("/");
  },[])

  const [searchParams] = useSearchParams();

  const info = useSelector(store => store.selectedVideo);
  const navigate = useNavigate();

  // if(info.selectedVideoData === null ) navigate("/");

  console.log("play info", info);

  return (
    <div className="ml-6  max-w-[853px] w-full bg-amber-300 overflow-x-hidden">
      <div className="w-full aspect-video pt-6 pr-6">
        <iframe
          className="w-full h-full rounded-2xl"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?si=-Mn2K-LL3Mevp3CB&autoplay=1&mute=0&playsinline=1"
          }
        //   src={`https://www.youtube.com/embed/${searchParams.get(
        //     "v"
        //   )}?si=-Mn2K-LL3Mevp3CB&autoplay=1&mute=1&playsinline=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          
        ></iframe>
      </div>
    </div>
  );
};

export default PlayPage;

// src={`https://www.youtube.com/embed/${searchParams.get(
//             "v"
//           )}?si=-Mn2K-LL3Mevp3CB&autoplay=1&mute=1&playsinline=1`}
