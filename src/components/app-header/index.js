import React, { memo } from 'react'
import { headerLinks } from '@/common/local-data'

import { AppHeaderWrapper, NavLeftDiv, NavRightDiv } from './style'
import { NavLink } from 'react-router-dom'
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

export default memo(function AppHeader() {

    const showSelectItem = (item, index) => {
        if (index < 3) {
            return <NavLink to={item.link}  >{item.title}

                <i className='sprite_01 icon'></i>
            </NavLink>
        } else {
            return <a href={item.link}>{item.title}</a>
        }

    }
    return (
        <AppHeaderWrapper>
            <div className='wrap-v1 content'>

                <NavLeftDiv>

                    <a href="#/" className="logo sprite_01"> </a>

                    {headerLinks.map((item, index) => <div key={item.title} className="select-item">{showSelectItem(item, index)}</div>)}

                </NavLeftDiv>
                <NavRightDiv>
                    <Input prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" className="search" />
                    <Button className='center'>创作者中心</Button>
                    <Button type="text" style={{color:'#ccc'}}> 登录</Button>
                </NavRightDiv>
            </div>
            <div className="divider"></div>

        </AppHeaderWrapper>
    )
})
