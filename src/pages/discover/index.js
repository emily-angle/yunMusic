import React, { memo } from 'react'
import { dicoverMenu } from '@/common/local-data'
import { HeadMenuDiv, DiscoverWrapperDiv } from './style'
import { NavLink, Outlet } from 'react-router-dom'

export default memo(function Discover() {
  return (
    <DiscoverWrapperDiv>
      <HeadMenuDiv >
        <div className='wrap-v1 content'>
          {dicoverMenu.map((item) => {
            return <div key={item.title} className="item"><NavLink to={item.link}>{item.title}</NavLink></div>
          })}

        </div>
      </HeadMenuDiv>
      <Outlet/>
    </DiscoverWrapperDiv>
  )
})
