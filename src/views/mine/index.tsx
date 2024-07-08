import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MineWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = () => {
  return <MineWrapper>Mine</MineWrapper>
}

export default memo(Mine)
