import {
  getTopBanner,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getSettleSingerList
} from "@/services/recommend";
import {
  CHANGE_BANNER,
  CHANGE_HOTRECOMMEND,
  CHANGE_NEWALBUM,
  CHANGE_UPRANKING,
  CHANGE_NEWRANKING,
  CHANGE_ORIGINALRANKING,
  CHANGE_SETTLESINGER,
} from "./constants";
import {
  UP_RANKING_ID,
  NEW_RANKING_ID,
  ORIDINAL_RANKING_ID,
} from "@/common/constants";

const changebannerAction = (data) => ({
  type: CHANGE_BANNER,
  banner: data,
});

const changeHotRecommendAction = (data) => ({
  type: CHANGE_HOTRECOMMEND,
  hotRecommends: data,
});
const changeNewAlbumAction = (data) => ({
  type: CHANGE_NEWALBUM,
  newAlbums: data,
});

const changeUpRankingAction = (data) => ({
  type: CHANGE_UPRANKING,
  upRanking: data,
});
const changeNewRankingAction = (data) => ({
  type: CHANGE_NEWRANKING,
  newRanking: data,
});
const changeOriginalRanking = (data) => ({
  type: CHANGE_ORIGINALRANKING,
  originalRanking: data,
});

const changeSettleSinger=(data)=>({
  type:CHANGE_SETTLESINGER,
  settleSingerList:data
})

export const getBannerAction = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changebannerAction(res.banners));
    });
  };
};

export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      //   console.log(res);
      dispatch(changeHotRecommendAction(res.result));
    });
  };
};
export const getNewAlbumsAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      // console.log(res);
      dispatch(changeNewAlbumAction(res.albums));
    });
  };
};
export const getTopRankingAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      const data = res.playlist;
      console.log(data);
      switch (idx) {
        case UP_RANKING_ID:
          dispatch(changeUpRankingAction(data));
          break;
        case NEW_RANKING_ID:
          dispatch(changeNewRankingAction(data));
          break;
        case ORIDINAL_RANKING_ID:
          dispatch(changeOriginalRanking(data));
          break;
      }
    });
  };
};

export const getSettleSingerAction=(limit)=>{
  return dispatch=>{
    return getSettleSingerList(limit).then(res=>{
      // 正常应该判断一下返回状态，模拟接口此处省略了
      dispatch(changeSettleSinger(res.artists))
    })
  }

}
