import styled from 'styled-components'
export const DiscoverWrapperDiv = styled.div`


`
export const HeadMenuDiv = styled.div`
    height: 35px;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    .content{
        display:flex;
        padding-left:180px;
        .item {
            a {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            padding: 0 13px;
            margin: 7px 17px 0;
            color: #fff;

            &:hover, &.active {
                text-decoration: none;
                background-color: #9B0909;
                border-radius: 20px;
            }
            }
        }
        
    }


`