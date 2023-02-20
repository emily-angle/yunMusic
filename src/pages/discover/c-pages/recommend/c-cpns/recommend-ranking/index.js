import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import ThemeHeaderIcon from "@/components/theme-header-icon";
import TopRanking from "@/components/top-ranking";
import { RecRankingWrapper } from "./style";
import { getTopRankingAction } from "../../store/actionCreators";
import {
  UP_RANKING_ID,
  NEW_RANKING_ID,
  ORIDINAL_RANKING_ID,
} from "@/common/constants";

export default memo(function RecRanking(props) {
  const dispatch = useDispatch();
  const { upRanking, newRanking, originalRanking } = useSelector((state) => {
    return {
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originalRanking: state.getIn(["recommend", "originalRanking"]),
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(getTopRankingAction(UP_RANKING_ID));
    dispatch(getTopRankingAction(NEW_RANKING_ID));
    dispatch(getTopRankingAction(ORIDINAL_RANKING_ID));
  }, [dispatch]);
  return (
    <RecRankingWrapper>
      <ThemeHeaderIcon title="榜单" />
      <div className="tops">
        <TopRanking
          info={upRanking?.tracks || []}
          coverImgUrl={upRanking?.coverImgUrl}
          name={upRanking?.name}
        />
        <TopRanking
          info={newRanking?.tracks || []}
          coverImgUrl={newRanking?.coverImgUrl}
          name={newRanking?.name}
        />
        <TopRanking
          info={originalRanking?.tracks || []}
          coverImgUrl={originalRanking?.coverImgUrl}
          name={originalRanking?.name}
        />
      </div>
    </RecRankingWrapper>
  );
});
