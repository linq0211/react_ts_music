// 1.区分开发环境和生产环境
// export const BASE_URL = 'http://coderwhy.dev:8000'
// export const BASE_URL = 'http://codercba.prod:8000'

// 2.代码逻辑判断, 判断当前环境
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   // 生产环境
//   BASE_URL = 'http://123.207.32.32:5000'
// } else {
//   // 开发环境
//   BASE_URL = 'http://codercba.com:5000'
// }

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)

export const TIME_OUT = 10000
export const BASE_URL = 'http://codercba.com:9002'
