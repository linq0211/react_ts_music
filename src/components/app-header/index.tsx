import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import headerTitles from '@/assets/data/header_titles.json'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  // 使用currentIndex记录当前索引时，刷新页面会重新初始化为0，出现路径与匹配item不一致
  // const [currentIndex, setCurrentIndex] = useState(0)

  function showListItem(item: { title: string; type: string; link: string }) {
    if (item.type === 'path') {
      return (
        // <Link to={item.link}>
        //   {item.title}
        //   <i className="icon sprite_01"></i>
        // </Link>

        // 使用NavLink解决active问题：NavLink会通过判断路由的路径，给当前活跃的组件添加一个active默认class
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <div className="logo sprite_01">
            <a href="/">网易云音乐</a>
          </div>
          <div className="list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showListItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
