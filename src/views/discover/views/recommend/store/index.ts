import {
  getArtistList,
  getBannerData,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]

  // bsRanking: any[]
  // xgRanking: any[]
  // ycRanking: any[]

  rankings: any[]
  settleSingers: any[]
}

const initialState: IState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],

  // 三个榜单单独管理
  // bsRanking: [],
  // xgRanking: [],
  // ycRanking: []

  // 三个榜单一个数组统一管理
  rankings: [],
  settleSingers: []
}

export const fetchRecommendData = createAsyncThunk('fetch/recommend', (payload, { dispatch }) => {
  getBannerData().then((res) => dispatch(changeBannersAction(res.banners)))
  getHotRecommend(8).then((res) => dispatch(changeHotRecommendAction(res.result)))
  getNewAlbum().then((res) => dispatch(changeNewAlbumAction(res.albums)))
  getArtistList(5).then((res) => dispatch(changeSettleSingersAction(res.artists)))

  // getPlaylistDetail(19723756).then((res) => dispatch(changeBsRankingAction(res.playlist)))
  // getPlaylistDetail(3779629).then((res) => dispatch(changeXgRankingAction(res.playlist)))
  // getPlaylistDetail(2884035).then((res) => dispatch(changeYcRankingAction(res.playlist)))
})

export const fetchRankingsData = createAsyncThunk(
  'fetch/recommend/rankings',
  (payload, { dispatch }) => {
    const ids = [19723756, 3779629, 2884035]
    // 定义存放promis的数组
    const results: Promise<any>[] = []
    for (const id of ids) {
      // axios请求默认返回一个promis
      results.push(getPlaylistDetail(id))
    }
    Promise.all(results).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
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

    // changeBsRankingAction(state, { payload }) {
    //   state.bsRanking = payload
    // },
    // changeXgRankingAction(state, { payload }) {
    //   state.xgRanking = payload
    // },
    // changeYcRankingAction(state, { payload }) {
    //   state.ycRanking = payload
    // }

    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changeSettleSingersAction
} = recommendSlice.actions
export default recommendSlice.reducer
