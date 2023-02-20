import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd';
import { getBannerAction } from '../../store/actionCreators'

import { TopBannerWrapperDiv, BannerControl, BannerLeft, BannerRight } from './style'


export default memo(function TopBanner(props) {

    const play = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)

    const { topBanners } = useSelector(state => ({
        // topBanners: state.get("recommend").get("topBanners")
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBannerAction())

    }, [dispatch])

    const beforeChange = useCallback((from, to) => {
        setCurrentIndex(to)
    }, [])

    // // 一般逻辑
    const getBlurImg = useCallback(() => {
        return topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"
    }, [currentIndex,topBanners])


    return (
        <TopBannerWrapperDiv bgImg={getBlurImg()}>
            <div className="wrap-v2 content">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={play} beforeChange={beforeChange}>
                        {topBanners.map((item, index) => {
                            return <div key={item.imageUrl}>
                                <img src={item.imageUrl} alt="" />
                            </div>
                        })}
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                    <a href="https://music.163.com/#/download">
                        下载客户端
                    </a>
                    <p>
                        PC 安卓 iPhone WP iPad Mac 六大客户端
                    </p>


                </BannerRight>
                <BannerControl>
                    <button className="prev" onClick={() => play.current.prev()}></button>
                    <button className="next" onClick={() => play.current.next()}></button>
                </BannerControl>
            </div>
        </TopBannerWrapperDiv>
    )
})
