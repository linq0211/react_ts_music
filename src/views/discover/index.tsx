import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { DiscoverWrapper } from './style'
import { Outlet } from 'react-router-dom'
import NavBar from './cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <DiscoverWrapper>
      <NavBar />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
