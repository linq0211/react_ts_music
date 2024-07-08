import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  return <AlbumWrapper>Album</AlbumWrapper>
}

export default memo(Album)
