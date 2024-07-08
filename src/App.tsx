import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/discover">发现</Link>
        <Link to="/focus">关注</Link>
        <Link to="/mine">我的</Link>
        <Link to="/download">下载</Link>
      </div>
      <Suspense fallback="loading...">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default memo(App)
