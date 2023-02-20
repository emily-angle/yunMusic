import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSettleSingerAction } from "../../store/actionCreators";
import { SettleSingerWrapper } from "./style";

const index = memo(() => {
  const dispatch = useDispatch();

  const { settleSingerList } = useSelector((store) => {
    return {
      settleSingerList: store.getIn(["recommend", "settleSingerList"]),
    };
  });
  useEffect(() => {
    dispatch(getSettleSingerAction(5));
  }, [dispatch]);
  return (
    <SettleSingerWrapper>
      <h3 className="title">
        <span>入驻歌手</span>
        <a href="#">查看全部 &gt;</a>
      </h3>
      <ul>
        {settleSingerList.map((item, index) => {
          return (
            <li key={item.id} className="item">
              <div className="singer_left">
                <img src={item.picUrl} />
              </div>
              <div className="singer_right">
                <div className="head text-nowrap">{item.name+(item?.alias[0]||'')}</div>
                <div></div>
              </div>
            </li>
          );
        })}
      </ul>
      <a href="#"  className="join_yun sprite_button"> 申请成为网易音乐人</a>
    </SettleSingerWrapper>
  );
});

export default index;
