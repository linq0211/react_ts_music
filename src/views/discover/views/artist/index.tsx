import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ArtistWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return <ArtistWrapper>Artist</ArtistWrapper>
}

export default memo(Artist)
