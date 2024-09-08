import React from "react";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className="h-screen absolute p-8 bg-gradient-to-r from-black">
      <p className="w-1/4 font-mono font-medium text-2xl text-white mt-20 mb-8">
        {title}
      </p>
      <p className="w-1/4 text-white">{desc}</p>
      <div className="flex mt-4 gap-4">
        <button className="rounded-lg bg-white text-black px-4 py-3 font-bold">▶️ Play</button>
        <button className="rounded-lg bg-gray-500 text-white px-4 py-3 font-semibold">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
