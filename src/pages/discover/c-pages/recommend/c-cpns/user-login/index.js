import React, { memo } from 'react'

import {UserLoginWrapper} from './style'

const index = memo(() => {
  return (
    <UserLoginWrapper>
      <p className='note sprite_02'>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <div type="link" className='sprite_02 btn_login'>用户登录</div>
    </UserLoginWrapper>
  )
})

export default index  