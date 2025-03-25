"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import Loader from "../Loader";

type Props = {
  videoId: string;
};

const Video = (props: Props) => {
  const { videoId } = props;

  return (
    <div className="w-full aspect-video flex flex-col gap-4 justify-center items-center">
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            playsinline: 1,
            loop: 1,
          },
        }}
        className="w-full h-full"
      />
    </div>
  );
};

export default Video;
