import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Slider } from "antd";

import { PlayerBarWrapper, Controller, PlayInfo, Operate } from "./style";
import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";
import {  useSelector } from "react-redux";

// import { getSongDetailAction } from "../store/actionCreators";

const index = memo(() => {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef();
  // redux
  // const dispatch = useDispatch();
  const { currentSong } = useSelector((state) => ({
    currentSong: state.getIn(["player", "currentSong"]),
  }));
  // other hooks

  // useEffect(() => {
  //   dispatch(getSongDetailAction(1993213130));
  // }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    // audioRef.current.play();
  }, [currentSong]);

  // other handler

  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");
  // const progress = (currentTime / duration) * 100;

  // handle function
  const changeMusic = (type) => {};
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();

    setIsPlaying(!isPlaying);
  }, [isPlaying]);
  const changeSequence = () => {};

  const timeUpdate = (e) => {
    if (!isChanging) {
      const _currentTime = e.target.currentTime;

      setCurrentTime(_currentTime * 1000);
      setProgress((_currentTime * 100 * 1000) / duration);
    }

    // setProgress(currentTime*1000*100/showDuration)
  };
  const sliderAfterChange = useCallback(
    (value) => {
      // audio在新的slider位置开始播放
      setIsChanging(false);
      audioRef.current.currentTime = (value * duration) / 100000;
      setProgress(value);
      setCurrentTime((value * duration) / 100);
    },
    [duration]
  );

  const sliderChange = useCallback(
    (value) => {
      // 1.需要改变当前的时间，2改变进度条位置
      setIsChanging(true);
      setProgress(value);
      setCurrentTime((value * duration) / 100);
    },
    [duration]
  );

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Controller isPlaying={isPlaying}>
          <button
            className="sprite_player prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
          <button
            className="sprite_player next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </Controller>

        <PlayInfo isPlaying={isPlaying}>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operate>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operate>
      </div>
      <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)} />
    </PlayerBarWrapper>
  );
});

export default index;
