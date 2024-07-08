import { createSlice } from '@reduxjs/toolkit'

// 一般有特殊类型无法推导时使用
// interface IState {}
// const initialState: IState = {}

const discoverSlice = createSlice({
  name: 'discover',
  initialState: {},
  reducers: {
    // payload默认为any类型 -> PayloadAction<T>，PayloadAction为action的类型，传入的泛型T指定payload类型
    // changeAction(state, action: PayloadAction<string>) {},
    // changeAction(state, { payload }: PayloadAction<string>) {}
  }
})

// export const {} = discoverSlice.actions
export default discoverSlice.reducer
