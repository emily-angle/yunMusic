import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${(props) => props.right || 0} 20px 0;
  .cover-top {
    height: 140px;

    position: relative;
    .cover-img {
      width: 100%;
      height: 100%;
    }
    .cover-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      display: inline-block;
      z-index: 1;
      background-position: 0 0;
    }
    .cover-info {
      height: 27px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      z-index: 2;
      background-position: 0 -537px;
      color: #ccc;
      .cover-icon {
        background-position: 0 -24px;
        display: inline-block;
        width: 14px;
        height: 11px;
        margin: 9px 5px 9px 10px;
        vertical-align: middle;
      }
      .play {
          height:27px;
        .sprite_icon {
          display:block;
          width:16px;
          height:17px;
          background-position:0 0;
          &:hover{
            background-position:0 -60px;     
          }
        }
      }
    }
  }
  .cover-bottom {
    margin: 8px 0 3px;
    font-size: 14px;
  }
`;
