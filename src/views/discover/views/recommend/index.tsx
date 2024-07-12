import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchRecommendData } from './store'
import TopBanner from './cpns/top-banner'
import HotRecommend from './cpns/hot-recommend'
import NewAlbum from './cpns/new-album'
import TopRanking from './cpns/top-ranking'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendData())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
