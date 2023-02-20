import styled from 'styled-components'
export const TopBannerWrapperDiv = styled.div`
  background: url(${props => props.bgImg}) center center/6000px;
.content{
    height: 270px;

    display: flex;
    position: relative;
}

`
export const BannerLeft = styled.div`
width:730px;

img{
   height:270px;
}
`

export const BannerRight = styled.div`
flex:1;
height:270px;
background-image:url(${require("@/assets/img/download.png")});
a{
    display:block;
    width:215px;
    height:56px;
    margin:186px 0 0 19px;
    background-position:0 9999px;
    text-indent:-9999px;
   &:hover{
    background-position:0 -290px;  
    text-decoration:none;
   }
   background-image:url(${require("@/assets/img/download.png")});
   background-repeat:no-repeat;
}
p{
    color:#8d8d8d;
    text-align:center;
    margin:5px auto;
}

`
export const BannerControl = styled.div`
position:absolute;
left: 0;
  right: 0;
  top: 50%;
  height:63px;

  transform: translateY(-50%);
.prev,.next{
    width:37px;
    height:63px;
    position:absolute;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }

}

.prev {
    left: -68px;
    background-position: 0 -360px;
  }

  .next {
    right: -68px;
    background-position: 0 -508px;
  }
`