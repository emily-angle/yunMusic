import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ThemeHeader from "@/components/theme-header-icon";
import SongsCover from "@/components/songs-cover";

import { HotRecommendWrapper } from "./style";
import { getHotRecommendsAction } from "../../store/actionCreators";

export default memo(function HotRecommend(props) {
  const dispatch = useDispatch();

  const {hotRecommends}=useSelector(state=>{
    return {
      hotRecommends:state.getIn(["recommend",'hotRecommends'])
    }
  },shallowEqual)
  useEffect(() => {
    dispatch(getHotRecommendsAction(8));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeader
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <div className="hot-recommend-content">
        {
          hotRecommends.map((item,index)=>{
            return <SongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  );
});
