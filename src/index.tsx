import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from '@/store'

if (process.env.NODE_ENV === 'development') {
  const Vconsole = require('vconsole')
  /* eslint-disable no-new */
  new Vconsole()
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
