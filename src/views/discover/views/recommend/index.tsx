import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchBannerData, fetchHotRecommendData, fetchNewAlbumData } from './store'
import TopBanner from './cpns/top-banner'
import HotRecommend from './cpns/hot-recommend'
import NewAlbum from './cpns/new-album'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerData())
    dispatch(fetchHotRecommendData(8))
    dispatch(fetchNewAlbumData())
    // dispatch(fetchPlaylistDetailData(241661196))
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
