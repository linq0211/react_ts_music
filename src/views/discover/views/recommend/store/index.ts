import { getBannerData, getHotRecommend, getNewAlbum, getPlaylistDetail } from '../api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
  playList: any[]
}

const initialState: IState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  playList: []
}

export const fetchBannerData = createAsyncThunk(
  'recommend/banner',
  async (payload, { dispatch }) => {
    const res = await getBannerData()
    dispatch(changeBannersAction(res.banners))
  }
)

export const fetchHotRecommendData = createAsyncThunk(
  'recommend/hotRecommend',
  async (limit: number, { dispatch }) => {
    const res = await getHotRecommend(limit)
    dispatch(changeHotRecommendAction(res.result))
  }
)

export const fetchNewAlbumData = createAsyncThunk(
  'recommend/newAlbum',
  async (payload, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbumAction(res.albums))
  }
)

export const fetchPlaylistDetailData = createAsyncThunk(
  'recommend/playlistDetail',
  async (id: number, { dispatch }) => {
    const res = await getPlaylistDetail(id)
    dispatch(changePlayListAction(res.result))
  }
)

const recommendSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changePlayListAction
} = recommendSlice.actions
export default recommendSlice.reducer
