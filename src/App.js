import React, { memo, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayer from '@/pages/player/play-bar'

import {Provider} from 'react-redux'
import store from '@/store'

// import {getCookie} from '@/services/common'


export default memo(function App() {
    // useEffect(()=>{
    //     getCookie()
    // },[])
    return (
        <Provider store={store}>
            <AppHeader />
            <Outlet />

            <AppFooter />
            <AppPlayer/>
        </Provider>

    )
})
