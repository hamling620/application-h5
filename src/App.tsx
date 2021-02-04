import React, { FC } from 'react'
import Hello from '@/components/Hello'
import logo from '@/assets/images/logo.png'

import './App.less'

const App: FC = () => {
  return (
    <div className="app">
      <Hello message='hello react' />
      <img src={logo} alt=""/>
    </div>
  )
}

export default App
