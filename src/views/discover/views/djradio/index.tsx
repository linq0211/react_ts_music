import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DjRadioWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  return <DjRadioWrapper>Djradio</DjRadioWrapper>
}

export default memo(Djradio)
