import React, { memo } from "react";
import { TopRankingWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
import { getSongDetailAction } from "@/pages/player/store";
import { useDispatch } from "react-redux";

export default memo(function TopRanking(props) {
  const { info = [], coverImgUrl, name } = props;
  const dispatch=useDispatch()
  // const { tracks = [] } = info;
  const playMusic = (ids) => {
    dispatch(getSongDetailAction(ids));
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(coverImgUrl, 80)} alt="" />
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {info.length
          ? info?.slice(0, 10).map((item, index) => (
              <div key={item.id} className="item">
                <span className="index">{index + 1}</span>
                <div className="text-nowrap info">
                  <a href={"/song?id=" + item.id} className="name text-nowrap">
                    {item.name}
                  </a>
                  <div className="oper">
                    <button
                      className="btn sprite_02 play"
                      onClick={() => playMusic(item.id)}
                    ></button>
                    <button className="btn sprite_icon2 add"></button>
                    <button className="btn sprite_02 save"></button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="footer">
        <a>查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
