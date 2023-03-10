import { Map } from "immutable";
import { CHANGE_CURRENT_SONG } from "./constants";

const defaultState = Map({
  currentSong: {},
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    default:
      return state;
  }
}
