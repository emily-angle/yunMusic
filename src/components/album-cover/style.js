import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  width: ${(props=>props.size)}px;
  height: ${(props=>props.size)}px;

  .album-top {
    position: relative;

    img {

      width: 100%;
      height: 100%;
    }
    .album-mask {
      position: absolute;
      width:${(props=>props.width)}px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }
    margin-bottom:7px;
  
  }
  .album-bottom, .album-author{
        font-size:12px;
    }
    .album-author{
        color:#666;
    }
`;
