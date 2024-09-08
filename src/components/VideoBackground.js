import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store?.movies?.trailer);
  useTrailerVideo(movieId);

  return (
    <div className="h-screen overflow-hidden m-0 p-0">
      <iframe
        className="w-full h-full"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?rel=0;&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
