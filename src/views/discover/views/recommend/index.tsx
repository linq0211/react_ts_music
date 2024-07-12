import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchRankingsData, fetchRecommendData } from './store'
import TopBanner from './cpns/top-banner'
import HotRecommend from './cpns/hot-recommend'
import NewAlbum from './cpns/new-album'
import TopRanking from './cpns/top-ranking'
import UserLogin from './cpns/user-login'
import SettleSinger from './cpns/settle-singer'
import HotAnchor from './cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendData())
    dispatch(fetchRankingsData())
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
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
