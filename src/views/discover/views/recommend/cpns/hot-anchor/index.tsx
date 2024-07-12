import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AnchorWrapper } from './style'
import SectionHeaderV2 from '@/components/section-header-v2'
import { hotRadios } from '@/assets/data/local_data'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <SectionHeaderV2 title="热门主播" />
      <div className="anchors">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="" className="image">
                <img src={getImageSize(item.picUrl, 40)} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </AnchorWrapper>
  )
}

export default memo(HotAnchor)
