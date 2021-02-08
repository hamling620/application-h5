import React, { FC, lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthRoute from '@/components/AuthRoute'
import Home from '@/views/Home'
import { useDispatch } from 'react-redux'
import { GET_USERINFO } from '@/store/types/user'

import './App.less'

const Login = lazy(() => import('@/views/Login'))
const Register = lazy(() => import('@/views/Register'))

const App: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: GET_USERINFO
    })
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <AuthRoute exact component={ Home } />
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
