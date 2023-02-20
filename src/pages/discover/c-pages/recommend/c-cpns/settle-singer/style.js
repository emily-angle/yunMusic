import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    height: 23px;
    margin: 0 20px;
    color: #333;
    border-bottom: 1px solid #ccc;
  }
  ul {
    margin: 6px 0 14px 20px;
  }
  .item {
    margin-top: 14px;
    width: 210px;
    height: 62px;
    background: #fafafa;
    display: flex;
    justify-content: space-between;
    .singer_left {
      img {
        width: 62px;
        height: 62px;
      }
      display: flex;
    }
    .singer_right {
      border: 1px solid #e9e9e9;
      border-left: none;
      padding-left: 14px;
      flex: 1;
      overflow: hidden;
      .head {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        margin-top: 14px;
      }
    }
  }
  .join_yun {
    display: inline-block;
    margin-left: 20px;
    border-radius: 4px;
    color: #333;
    width: 210px;
    border: 1px solid #ccc;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    padding: 0 5px 0 0;
  }
`;
