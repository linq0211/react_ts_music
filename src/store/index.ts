import recommendReducer from '@/views/discover/views/recommend/store'
import { configureStore } from '@reduxjs/toolkit'
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

// typeof store.getState -> 获取getState的类型，是一个函数：() => ({...})
// ReturnType<> -> 获取函数的返回值类型：{...}
type IRootState = ReturnType<typeof store.getState>
// TypedUseSelectorHook<IRootState> -> <TSelected>(selector: (state: IRootState) => TSelected, equalityFn?: EqualityFn<NoInfer<TSelected>>): TSelected;
// TSelected 指的是 useAppSelector 函数在调用时额外传递的泛型，没有传递时会进行类型推导 -> 参数回调函数的返回值会和函数的返回值类型相同
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

// typeof store.dispatch -> useDispatch实质就是使用store.dispatch，使用typeof获取的类型也就是useDispatch的类型
// const dispatch = store.dispatch
// const dispatch1 = useDispatch
// console.log(typeof dispatch === typeof dispatch1) true
type AppDispatch = typeof store.dispatch
// () => AppDispatch，指定useAppDispatch是一个函数类型，并且返回值是同store.dispatch的函数类型
export const useAppDispatch: () => AppDispatch = useDispatch

// 进行统一封装，方便各个页面使用
export const AppShallowEqual = shallowEqual

export default store
