import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return <RecommendWrapper>Recommend</RecommendWrapper>
}

export default memo(Recommend)
