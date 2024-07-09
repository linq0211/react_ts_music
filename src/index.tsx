import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'normalize.css'
import '@/assets/css/index.css'

import App from '@/App'
import store from './store'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </HashRouter>
)
