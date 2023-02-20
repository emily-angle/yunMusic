import React, { memo } from "react";
import { AlbumCoverWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function AlbumCover(props) {
  const { name, picUrl, artist } = props.info;
  return (
    <AlbumCoverWrapper bgp={props.bgp} size={props.size} width={props.width}>
      <div className="album-top">
        <img src={getSizeImage(picUrl,100)} />
        <div className="album-mask image_cover"></div>
      </div>
      <div className="album-bottom">{name}</div>
      <div className="album-author text-nowrap">{artist.name}</div>
    </AlbumCoverWrapper>
  );
});
