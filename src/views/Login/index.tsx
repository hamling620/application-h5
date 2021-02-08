import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN } from '@/store/types/user'
import { RootState } from '@/store/reducers'
import { Redirect } from 'react-router-dom'

const Login: FC = () => {
  const redirectTo = useSelector((state: RootState) => state.user.redirectTo)
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [pwd, setPwd] = useState('')

  const handleLogin = () => {
    dispatch({
      type: LOGIN,
      username,
      pwd
    })
  }

  return (
    <div>
      { redirectTo ? <Redirect to={ redirectTo } /> : null}
      <input type="text" value={ username } onChange={ e => setUsername(e.target.value) } />
      <input type="password" value={ pwd } onChange={ e => setPwd(e.target.value) } />
      <button onClick={ handleLogin }>登录</button>
    </div>
  )
}

export default Login
