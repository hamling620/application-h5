import React, { FC } from 'react'
import Hello from '@/components/Hello'

import './App.less'

const App: FC = () => {
  return (
    <div className="app">
      <Hello message='hello react' />
    </div>
  )
}


export default App
