import styled from "styled-components";
export const HeaderWrapper = styled.div`
  padding: 0 0 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  height: 33px;
  line-height: 31px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    .title {
      font-size: 20px;
    }
    .keyword {
      display: flex;
      margin: 0 0 0 20px;
      .item {
        font-size: 12px;    
        
        .line {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    .icon {
        margin-left:4px;
        display:inline-block;
        width:12px;
        height:12px;
        background-position:0 -240px;
        background-color:transparent;
    }
  }
`;
