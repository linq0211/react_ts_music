import React, { memo, useRef, useState } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { AppShallowEqual, useAppSelector } from '@/store'
import { Carousel } from 'antd'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    AppShallowEqual
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)

  function beforeChangeHandler() {
    // setCurrentIndex(-1)
  }
  function afterChangeHandler(current: number) {
    setCurrentIndex(current)
  }
  function dotsClickHandler(index: number) {
    carouselRef.current?.goTo(index)
    setCurrentIndex(index)
  }
  function btnClickHandler(isLeft: boolean) {
    let newIndex = currentIndex
    if (isLeft) {
      carouselRef.current?.prev()
      newIndex = newIndex - 1
    } else {
      carouselRef.current?.next()
      newIndex = newIndex + 1
    }
    if (newIndex < 0) newIndex = banners.length - 1
    if (newIndex > banners.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }

  let bgImgUrl = banners[currentIndex]?.imageUrl
  if (bgImgUrl) {
    bgImgUrl = bgImgUrl + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper bgImg={bgImgUrl}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            ref={carouselRef}
            dots={false}
            effect="fade"
            beforeChange={beforeChangeHandler}
            afterChange={afterChangeHandler}
          >
            {banners?.map((item) => {
              return (
                <div className="item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl} onClick={() => dotsClickHandler(index)}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="left btn" onClick={() => btnClickHandler(true)}></button>
          <button className="right btn" onClick={() => btnClickHandler(false)}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
