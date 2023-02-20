import React, { memo } from "react";

import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import RecRanking from "./c-cpns/recommend-ranking";
import UserLogin from "./c-cpns/user-login";
import SettleSinger from "./c-cpns/settle-singer";
import HotAnchor from "./c-cpns/hot-anchor";

import { RecommendWrapper, RecommendLeft, RecommendRight } from "./style";

export default memo(function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="wrap-v2 recommend-content">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RecommendRight>
      </div>
    </RecommendWrapper>
  );
});
