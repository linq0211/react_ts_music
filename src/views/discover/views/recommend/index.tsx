import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchRecommendData } from './store'
import TopBanner from './cpns/top-banner'

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
    </RecommendWrapper>
  )
}

export default memo(Recommend)
