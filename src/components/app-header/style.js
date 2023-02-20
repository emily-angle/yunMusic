import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`

height:75px;
background-color:#242424;
font-size:14px;
.content{
    height:70px;
    line-height:70px;
    display:flex;
    justify-content:space-between;
    color: #fff;;
}

.divider{
    height:5px;
    background-color: #C20C0C;
}

`
export const NavLeftDiv = styled.div`
display:flex;

.logo{
    display:inline-block;
    width:176px;
    height:70px;
    background-position: 0px 0px;
}
.select-item{
    position:relative;
    a{
     
        color:#ccc;
        font-size:14px;
        display:inline-block;
        padding:0 20px;
        
    }
    :last-of-type a{
        ::after{
            position:absolute;
            display:block;
            content:"";
            width:28px;
            height:19px;
            background-image:url(${require("@/assets/img/sprite_01.png")});
            background-position:-190px 0;
            top:20px;
            right:-15px;
        }

    }
    &:hover a, a.active {
        text-decoration:none;
        color:#fff;
        background-color:#000;
    }
    a.active .icon{
      position:absolute;
      display:inline-bolck;
      width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
    }

    
}



`
export const NavRightDiv = styled.div`

display:flex;
align-items:center;
color: #ccc;
  font-size: 12px;
.search{
    width: 158px;
    height: 32px;
    border-radius: 16px;
    input{
        &::placeholder {
        font-size: 12px;
      } 
    }

}
.center {
    color:#ccc;
    height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }
  


`