import * as types from "./constants";
import { getSongDetail } from "@/services/player";
import { SONG_DETAIL } from "@/common/constants";

const changeCurrentSongAction = (data) => ({
  type: types.CHANGE_CURRENT_SONG,
  currentSong: data,
});

// 暴露在外部的action
export const getSongDetailAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      console.log(res);
      let song = SONG_DETAIL.songs[0];
      if (!song) return;
      dispatch(changeCurrentSongAction(song));
    });
  };
};
