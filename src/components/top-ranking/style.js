import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  .header {
    height: 100px;
    display: flex;

    margin: 20px 0 0 20px;

    .image {
      width: 80px;
      height: 80px;
      position: relative;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .info {
      margin: 5px 0 0 10px;

      a {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }

      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }
    }
  }
  .list {
    width: 230px;
    .item {
      display: flex;
      height: 32px;
      line-height: 32px;
      .index {
        display: inline-block;
        margin-left: 19px;
        width: 35px;
        height: 32px;
        text-align: center;
      }
      :nth-child(-n+3) .index {
        color: #c10d0c;
      }
      .info {
        color: #000;
        width: 170px;
        height: 32px;
        line-height: 32px;
        display: flex;
        justify-content: space-between;
        .name{
          flex:1;
        }
      }
      .oper {
        display: none;
        width: 82px;
        .btn {
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }
        .play {
          background-position: -267px -268px;
        }

        .add {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }

        .save {
          background-position: -297px -268px;
        }
      }
      &:hover .oper {
        display: block;
      }
    }
  }
  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;

    a {
      color: #000;
    }
  }
`;
