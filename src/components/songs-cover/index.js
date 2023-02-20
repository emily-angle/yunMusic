import React, { memo } from "react";
import { Button } from "antd";

import { SongsCoverWrapper } from "./style";
import { getCount, getSizeImage } from "@/utils/format-utils";

export default memo(function SongsCover(props) {
  const { picUrl, name, copywriter, id, playCount } = props.info;

  return (
    <SongsCoverWrapper right={props?.right}>
      <div className="cover-top">
        <img
          src={getSizeImage(picUrl, 140)}
          alt=""
          className="cover-img"
        />
        <a className="cover-mask sprite_covor" href={"/playlist?id=" + id}></a>
        <div className="cover-info sprite_covor">
          <div>
            <i className="cover-icon sprite_icon"></i>
            <span>{getCount(playCount)}</span>
          </div>
          <Button type="link" className="play">
            <i className="sprite_icon"></i>
          </Button>
        </div>
      </div>
      <p className="cover-bottom text-nowrap">{name}</p>
      {props.copywriter && <p className="cover-author">by {copywriter}</p>}
    </SongsCoverWrapper>
  );
});
