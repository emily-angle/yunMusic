import { Map } from "immutable";
import * as types from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [], //新碟上架数据

  upRanking: {},
  newRanking: {},
  originRanking: {},

  settleSingerList: [],
});

function reducer(state = defaultState, action) {
  console.log(action.type)
  switch (action.type) {
    case types.CHANGE_BANNER:
      return state.set("topBanners", action.banner);
    case types.CHANGE_HOTRECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case types.CHANGE_NEWALBUM:
      return state.set("newAlbums", action.newAlbums);
    case types.CHANGE_UPRANKING:
      return state.set("upRanking", action.upRanking);
    case types.CHANGE_NEWRANKING:
      return state.set("newRanking", action.newRanking);
    case types.CHANGE_ORIGINALRANKING:
      return state.set("originalRanking", action.originalRanking);

    case types.CHANGE_SETTLESINGER:
      return state.set("settleSingerList", action.settleSingerList);
    default:
      return state;
  }
}
export default reducer;
