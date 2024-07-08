import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = React.lazy(() => import('@/views/discover'))
const Recommend = React.lazy(() => import('@/views/discover/views/recommend'))
const Ranking = React.lazy(() => import('@/views/discover/views/ranking'))
const Songs = React.lazy(() => import('@/views/discover/views/songs'))
const Djradio = React.lazy(() => import('@/views/discover/views/djradio'))
const Artist = React.lazy(() => import('@/views/discover/views/artist'))
const Album = React.lazy(() => import('@/views/discover/views/album'))

const Focus = React.lazy(() => import('@/views/focus'))
const Mine = React.lazy(() => import('@/views/mine'))
const Download = React.lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/discover" /> },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
