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
    <div className="w-full h-full md:w-[300px] md:p-4 aspect-video flex flex-col gap-4 justify-center items-center relative">
      <p className="text-xl">{title}</p>
      {composer ? <p className="text-sm">Composer: {composer}</p> : null}
      {artist ? <p className="text-base">Artist: {artist}</p> : null}
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            playsinline: 1,
          },
        }}
        className="w-full justify-center flex md:w-0 md:h-0 md:absolute md:opacity-0 md:pointer-events-none"
        onReady={(e) => {
          e.target.playVideo();
          setPlayer(e.target);
        }}
        onEnd={() => {
          if (player) {
            player.seekTo(0);
          }
        }}
      />
      <div className="opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto">
        {player && currentTime ? (
          <div className="flex flex-col w-[300px] gap-2">
            <div className="h-2 w-full border-baseColor border-[1px] border-solid rounded-full">
              <div
                className="h-2 bg-baseColor rounded-full"
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
                    id="svg"
                    className="w-full h-full"
                    alt="ctrl"
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
    </div>
  );
};

export default Music;
