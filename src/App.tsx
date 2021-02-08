import React, { FC, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthRoute from '@/components/AuthRoute'
import Home from '@/views/Home'

import './App.less'

const Login = lazy(() => import('@/views/Login'))
const Register = lazy(() => import('@/views/Register'))
const BossInfo = lazy(() => import('@/views/BossInfo'))

const App: FC = () => {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <AuthRoute exact component={ Home } />
            <AuthRoute path="/bossinfo" exact component={ BossInfo } />
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
