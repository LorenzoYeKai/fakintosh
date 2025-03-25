"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import Loader from "../Loader";

type Props = {
  title: string;
  composer?: string;
  artist?: string;
  videoId: string;
};

const Music = (props: Props) => {
  const { title, composer, artist, videoId } = props;
  const [player, setPlayer] = useState<YouTubeEvent["target"] | undefined>(
    undefined
  );

  const [currentTime, setCurrentTime] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!player) return;
    const i = setInterval(() => {
      setCurrentTime(player.getCurrentTime());
    }, 100);

    return () => clearInterval(i);
  }, [player]);

  return (
    <div className="w-[300px] aspect-video flex flex-col items-center relative p-4">
      <p className="text-xl">{title}</p>
      {composer ? <p className="text-sm">Composer: {composer}</p> : null}
      {artist ? <p className="text-base">Artist: {artist}</p> : null}
      <YouTube
        videoId={videoId}
        opts={{
          height: "0",
          width: "0",
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,

            playsinline: 1,
          },
        }}
        className="opacity-0"
        onReady={(e) => setPlayer(e.target)}
        onEnd={() => {
          if (player) {
            player.seekTo(0);
          }
        }}
      />
      {player && currentTime ? (
        <div className="flex flex-col w-full gap-2">
          <div className="h-2 w-full border-white border-[1px] border-solid rounded-full">
            <div
              className="h-2 bg-white rounded-full"
              style={{
                width: `${(currentTime / player.getDuration()) * 100}%`,
              }}
            />
          </div>
          <div className="flex justify-between w-full">
            <button
              className="w-4 h-4 bg-transparent border-none p-0 cursor-pointer"
              onClick={() => {
                if (player.getPlayerState() === 1) {
                  player.pauseVideo();
                  return;
                }
                player.playVideo();
              }}
            >
              {player.getPlayerState() === 1 ||
              player.getPlayerState() === 2 ? (
                <img
                  src={
                    player.getPlayerState() === 1
                      ? "/svg/pause.svg"
                      : "/svg/play.svg"
                  }
                  className="w-full h-full"
                />
              ) : (
                <Loader />
              )}
            </button>
            <p>
              {moment.utc(currentTime * 1000).format("HH:mm:ss")}/
              {moment.utc(player.getDuration() * 1000).format("HH:mm:ss")}
            </p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Music;
