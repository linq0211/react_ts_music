import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { AppShallowEqual, useAppSelector } from '@/store'
import TopRankingItem from '@/components/top-ranking-item'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    AppShallowEqual
  )

  return (
    <TopRankingWrapper>
      <SectionHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
