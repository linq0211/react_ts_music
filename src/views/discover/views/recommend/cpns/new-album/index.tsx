import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { Carousel } from 'antd'
import { AppShallowEqual, useAppSelector } from '@/store'
import AlbumItem from '@/components/album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)

  const { newAlbum } = useAppSelector(
    (state) => ({
      newAlbum: state.recommend.newAlbum
    }),
    AppShallowEqual
  )

  return (
    <NewAlbumWrapper>
      <SectionHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div
          className="sprite_02 arrow arrow-left"
          onClick={() => carouselRef.current?.prev()}
        ></div>
        <div className="banner">
          <Carousel dots={false} speed={1500} ref={carouselRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="list">
                    {newAlbum?.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <AlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="sprite_02 arrow arrow-right"
          onClick={() => carouselRef.current?.next()}
        ></div>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
