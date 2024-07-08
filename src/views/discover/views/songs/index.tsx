import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongsWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  return <SongsWrapper>Songs</SongsWrapper>
}

export default memo(Songs)
