import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DownloadWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const DownLoad: FC<IProps> = () => {
  return <DownloadWrapper>DownLoad</DownloadWrapper>
}

export default memo(DownLoad)
