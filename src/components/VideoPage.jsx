// import React from "react";

// const VideoPage = () => {
//   return (
//     <div className="ml-6  max-w-[853px] w-full bg-amber-300 overflow-x-hidden">
//       <div className="w-full aspect-video pt-6 pr-6">
//         <iframe
//           className="w-full h-full rounded-2xl"
//           src="https://www.youtube.com/embed/wB3Jf7yyvfU?si=-Tstt4vSA6jwdYzX"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default VideoPage;


import React from "react";
import MenuBar from "./MenuBar";
import VideoContainer from "./VideoContainer";
import PlayPage from "./PlayPage";

const VideoPage = () => {
  return (
    <div className="flex-1 flex min-h-0">
      <MenuBar />
      {/* <VideoContainer /> */}
      <PlayPage />
    </div>
  );
};

export default VideoPage;
