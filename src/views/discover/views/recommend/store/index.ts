import { getBannerData } from '../api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IState } from '../type'

const initialState: IState = {
  banners: []
}

export const fetchRecommendData = createAsyncThunk('fetch/recommend', (payload, { dispatch }) => {
  getBannerData().then((res) => {
    dispatch(changeBannersAction(res.banners))
  })
})

const recommendSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
