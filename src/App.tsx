import React, { FC, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthRoute from '@/components/AuthRoute'
import Home from '@/views/Home'

import './App.less'

const Login = lazy(() => import('@/views/Login'))
const Register = lazy(() => import('@/views/Register'))
const Boss = lazy(() => import('@/views/Boss'))
const BossInfo = lazy(() => import('@/views/BossInfo'))

const App: FC = () => {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <AuthRoute path="/bossinfo" exact component={ BossInfo } />
            <AuthRoute path="/boss" exact component={ Boss } />
            <AuthRoute exact component={ Home } />
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
