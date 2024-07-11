import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionHeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreLink?: string
  moreText?: string
}

const SectionHeaderV1: FC<IProps> = (props) => {
  const { title = '默认标题', keywords = [], moreText = '更多', moreLink = '/' } = props
  return (
    <SectionHeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </SectionHeaderV1Wrapper>
  )
}

export default memo(SectionHeaderV1)
