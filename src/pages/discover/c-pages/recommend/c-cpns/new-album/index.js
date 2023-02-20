import React, { memo, useEffect, useRef } from "react";
import ThemeHeaderIcon from "@/components/theme-header-icon";
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from "antd";

import AlbumCover from "@/components/album-cover";
import { NewAlbumWrapper } from "./style";

import { getNewAlbumsAction } from "../../store/actionCreators";

export default memo(function NewAlbum() {
  //获取新碟上架的接口
  const dispatch = useDispatch();
  const pageRef = useRef();

  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.getIn(["recommend", "newAlbums"]),
  }));
  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch]);
  return (
    <NewAlbumWrapper>
      <ThemeHeaderIcon title="新碟上架" />
      <div className="new-album-content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item, index) => {
              return (
                <div className="page" key={index}>
                  {newAlbums?.slice(item * 5, (item + 1) * 5)
                    .map((iten, i) => (
                      <div className="item" key={iten.id}>
                        <AlbumCover info={iten}    bgp="-570px" width={118} size={100}/>
                      </div>
                    ))}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </NewAlbumWrapper>
  );
});
